<template>
  <div class="globe-wrap">
    <canvas ref="canvas" class="w-full h-full"></canvas>
    <div class="globe-ctrls" aria-label="目的地组切换">
      <button :class="{active: reverseGroup==='global'}" @click="setReverseGroup('global')">全球</button>
      <button :class="{active: reverseGroup==='europe'}" @click="setReverseGroup('europe')">欧洲</button>
      <button :class="{active: reverseGroup==='americas'}" @click="setReverseGroup('americas')">美洲</button>
      <button :class="{active: reverseGroup==='apac'}" @click="setReverseGroup('apac')">大洋洲</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from "vue";

/**
 * 可调参数
 */
const ORIGIN = { lon: 116.4, lat: 39.9 }; // 北京附近
const DESTS = [
  { name: "London",   lon: -0.1278, lat: 51.5074 },
  { name: "Paris",    lon: 2.3522,  lat: 48.8566 },
  { name: "Berlin",   lon: 13.4050, lat: 52.5200 },
  { name: "Madrid",   lon: -3.7038, lat: 40.4168 },
  { name: "Rome",     lon: 12.4964, lat: 41.9028 },
  { name: "Warsaw",   lon: 21.0122, lat: 52.2297 },
  { name: "Stockholm",lon: 18.0686, lat: 59.3293 },
];

const opts = {
  rotLon: 80,            // 视图中心经度（越大越向东）
  rotLat: 28,            // 视图中心纬度
  autoSpin: 0.004,       // 自动旋转速度（弧度/帧）
  lineColor: "#4CC9FF",  // 弧线颜色
  pulseColor: "#7DF9FF", // 脉冲/粒子颜色
  oceanTop: "#07131c",   // 海面渐变顶色
  oceanBottom: "#0a1f2d",// 海面渐变底色
  graticule: "rgba(255,255,255,0.08)", // 经纬网颜色（不再使用）
  outline: "rgba(255,255,255,0.35)",   // 地球边界
  showGraticule: false,  // 关闭经纬网
  showContinents: true,  // 显示洲板块
};

const canvas = ref<HTMLCanvasElement | null>(null);
let ctx: CanvasRenderingContext2D | null = null;
let raf = 0;
let continentsGeo: any | null = null;
const paused = ref(false);
const dragging = ref(false);
const lastPt = ref<{x:number,y:number} | null>(null);
const reverseGroup = ref<'global'|'europe'|'americas'|'apac'>('global');

const toRad = (d: number) => (d * Math.PI) / 180;
const toDeg = (r: number) => (r * 180) / Math.PI;

/** 正射投影：经纬度 -> 平面坐标（并返回是否可见） */
function project(
  lon: number,
  lat: number,
  cx: number,
  cy: number,
  R: number,
  lam0: number,
  phi0: number
) {
  const lam = toRad(lon);
  const phi = toRad(lat);
  const cLon = toRad(lam0);
  const cLat = toRad(phi0);

  const sinPhi = Math.sin(phi);
  const cosPhi = Math.cos(phi);
  const sinCLat = Math.sin(cLat);
  const cosCLat = Math.cos(cLat);
  const cosDLam = Math.cos(lam - cLon);

  // 可见性（球面夹角余弦）
  const cosc = sinCLat * sinPhi + cosCLat * cosPhi * cosDLam;
  const visible = cosc >= 0;

  const x = R * cosPhi * Math.sin(lam - cLon);
  const y = -R * (cosCLat * sinPhi - sinCLat * cosPhi * cosDLam);

  return { x: cx + x, y: cy + y, visible };
}

/** 球面大圆插值（Slerp on sphere） */
function greatCirclePoints(a: {lon:number,lat:number}, b:{lon:number,lat:number}, n=120){
  // 转弧度
  const φ1 = toRad(a.lat), λ1 = toRad(a.lon);
  const φ2 = toRad(b.lat), λ2 = toRad(b.lon);
  // 夹角
  const Δσ = Math.acos(
    Math.sin(φ1)*Math.sin(φ2) + Math.cos(φ1)*Math.cos(φ2)*Math.cos(λ2-λ1)
  ) || 1e-6;

  const pts: Array<{lon:number,lat:number}> = [];
  for(let i=0;i<=n;i++){
    const t = i/n;
    const sinΔ = Math.sin(Δσ);
    const A = Math.sin((1-t)*Δσ)/sinΔ;
    const B = Math.sin(t*Δσ)/sinΔ;

    const x = A*Math.cos(φ1)*Math.cos(λ1) + B*Math.cos(φ2)*Math.cos(λ2);
    const y = A*Math.cos(φ1)*Math.sin(λ1) + B*Math.cos(φ2)*Math.sin(λ2);
    const z = A*Math.sin(φ1) + B*Math.sin(φ2);

    const φ = Math.atan2(z, Math.hypot(x,y));
    const λ = Math.atan2(y, x);
    pts.push({ lon: toDeg(λ), lat: toDeg(φ) });
  }
  return pts;
}

/** 生成每条弧线的缓存（经纬 -> 投影点在绘制时做） */
const arcs = DESTS.map(d => ({
  to: d,
  path: greatCirclePoints(ORIGIN, d, 160),
  // 动画参数
  head: 0,           // 粒子头位置（0-1）
  speed: 0.006 + Math.random()*0.003,
  delay: Math.random()*120, // 帧延迟
}));

/** 反向弧线源：从多洲区域代表点回射到中国 */
const reverseSourcesAll = [
  { name:'Europe', lon: 10, lat: 50 },
  { name:'Africa', lon: 20, lat: 10 },
  { name:'NorthAmerica', lon:-95, lat: 40 },
  { name:'SouthAmerica', lon:-65, lat:-10 },
  { name:'Oceania', lon:140, lat:-25 },
];
const reverseGroups: Record<string, typeof reverseSourcesAll> = {
  global: reverseSourcesAll,
  europe: reverseSourcesAll.filter(s=> s.name==='Europe'),
  americas: reverseSourcesAll.filter(s=> s.name==='NorthAmerica' || s.name==='SouthAmerica'),
  apac: reverseSourcesAll.filter(s=> s.name==='Oceania'),
};
let arcsReverse = buildReverseArcs(reverseGroups[reverseGroup.value]);

function buildReverseArcs(sources: typeof reverseSourcesAll){
  return sources.map(s => ({
    from: s,
    path: greatCirclePoints(s, ORIGIN, 160),
    head: 0,
    speed: 0.005 + Math.random()*0.003,
    delay: Math.random()*120,
  }));
}

function setReverseGroup(g: 'global'|'europe'|'americas'|'apac'){
  reverseGroup.value = g;
  arcsReverse = buildReverseArcs(reverseGroups[g]);
}

/** 简化“洲板块”配置：使用各洲近似中心与角半径，在球面上绘制柔和渐变块 */
type Continent = { name:string; lon:number; lat:number; radiusDeg:number; color:string };
const continents: Continent[] = [
  { name:'Asia',         lon: 90,   lat: 45,  radiusDeg: 45, color: 'rgba(46,125,255,0.18)' },
  { name:'Europe',       lon: 20,   lat: 55,  radiusDeg: 25, color: 'rgba(122,61,240,0.18)' },
  { name:'Africa',       lon: 20,   lat:  5,  radiusDeg: 35, color: 'rgba(240,165,0,0.18)' },
  { name:'NorthAmerica', lon:-100,  lat: 45,  radiusDeg: 35, color: 'rgba(20,146,230,0.18)' },
  { name:'SouthAmerica', lon: -60,  lat:-15,  radiusDeg: 25, color: 'rgba(255,106,91,0.18)' },
  { name:'Oceania',      lon: 145,  lat:-20,  radiusDeg: 22, color: 'rgba(28,154,109,0.20)' },
];

function draw() {
  if(!ctx || !canvas.value) return;
  const c = canvas.value;
  const dpr = Math.max(1, window.devicePixelRatio || 1);
  const w = c.clientWidth;
  const h = c.clientHeight;
  if(c.width !== Math.floor(w*dpr) || c.height !== Math.floor(h*dpr)) {
    c.width = Math.floor(w*dpr);
    c.height = Math.floor(h*dpr);
  }
  ctx.setTransform(dpr,0,0,dpr,0,0);
  ctx.clearRect(0,0,w,h);

  const cx = w/2, cy = h/2;
  const R = Math.min(w,h)*0.42;

  // 轻微自转（悬停或拖拽时暂停）
  if(!paused.value && !dragging.value){
    opts.rotLon += toDeg(opts.autoSpin);
  }

  // 海面背景（径向渐变）
  const grad = ctx.createRadialGradient(cx, cy, R*0.2, cx, cy, R*1.05);
  grad.addColorStop(0, opts.oceanTop);
  grad.addColorStop(1, opts.oceanBottom);
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(cx, cy, R, 0, Math.PI*2);
  ctx.fill();

  // 洲板块（真实轮廓）：基于简化 GeoJSON 投影绘制
  if (opts.showContinents && continentsGeo) {
    ctx.save();
    // 裁剪为地球圆
    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, Math.PI*2);
    ctx.clip();
    ctx.lineWidth = 0.7;
    for (const f of continentsGeo.features || []){
      const name = f.properties?.name || '';
      const fill =
        name.includes('Europe') ? 'rgba(122,61,240,0.18)'
      : name.includes('Asia') ? 'rgba(46,125,255,0.18)'
      : name.includes('Africa') ? 'rgba(240,165,0,0.18)'
      : name.includes('North America') ? 'rgba(20,146,230,0.18)'
      : name.includes('South America') ? 'rgba(255,106,91,0.18)'
      : name.includes('Oceania') ? 'rgba(28,154,109,0.20)'
      : 'rgba(200,220,255,0.12)';
      const geom = f.geometry;
      const drawRings = (context: CanvasRenderingContext2D, rings:number[][])=>{
        let started = false;
        context.beginPath();
        for(const [lon,lat] of rings){
          const pr = project(lon, lat, cx, cy, R, opts.rotLon, opts.rotLat);
          if(!pr.visible){ started = false; continue; }
          if(!started){ context.moveTo(pr.x, pr.y); started = true; }
          else context.lineTo(pr.x, pr.y);
        }
        context.closePath();
        context.fillStyle = fill;
        context.fill();
      }
      if(geom?.type === 'Polygon'){
        drawRings(ctx!, geom.coordinates[0]);
      } else if(geom?.type === 'MultiPolygon'){
        for(const poly of geom.coordinates){ drawRings(ctx!, poly[0]); }
      }
    }
    ctx.restore();
  }

  // 地球外圈
  ctx.strokeStyle = opts.outline;
  ctx.lineWidth = 1.2;
  ctx.beginPath();
  ctx.arc(cx, cy, R, 0, Math.PI*2);
  ctx.stroke();

  // 源点脉冲
  pulseAt(ORIGIN.lon, ORIGIN.lat, cx, cy, R);

  // 发射点标签（"China"）
  drawLabel('China', ORIGIN.lon, ORIGIN.lat, cx, cy, R);

  // 绘制多条弧线与粒子（China -> Europe 方向）
  for (const arc of arcs) {
    if (arc.delay > 0) { arc.delay--; continue; }
    arc.head = (arc.head + arc.speed) % 1;

    // 线渐变
    const g = ctx.createLinearGradient(0, cy-R, 0, cy+R);
    g.addColorStop(0, `${opts.lineColor}00`);
    g.addColorStop(0.5, `${opts.lineColor}a0`);
    g.addColorStop(1, `${opts.lineColor}00`);
    ctx.strokeStyle = g;
    ctx.lineWidth = 1.5;

    // 将大圆路径投影并绘制可见部分
    ctx.beginPath();
    let started = false;
    for (let i=0;i<arc.path.length;i++) {
      const p = arc.path[i];
      const pr = project(p.lon, p.lat, cx, cy, R, opts.rotLon, opts.rotLat);
      if (!pr.visible) { started = false; continue; }
      if (!started) { ctx.moveTo(pr.x, pr.y); started = true; }
      else { ctx.lineTo(pr.x, pr.y); }
    }
    ctx.stroke();

    // 粒子（沿路径前进）
    const headIdx = Math.floor(arc.head * (arc.path.length-1));
    const tailLen = 18;
    for (let j=0;j<tailLen;j++){
      const idx = headIdx - j;
      if (idx < 0) break;
      const p = arc.path[idx];
      const pr = project(p.lon, p.lat, cx, cy, R, opts.rotLon, opts.rotLat);
      if(!pr.visible) continue;
      const alpha = Math.max(0, 1 - j/tailLen);
      ctx.fillStyle = `rgba(125,249,255,${alpha})`;
      ctx.beginPath();
      ctx.arc(pr.x, pr.y, 1.4 + (1-alpha)*1.2, 0, Math.PI*2);
      ctx.fill();
    }

    // 到达闪烁：欧洲各城市落点
    if(arc.head > 0.88){
      flashAt(arc.to.lon, arc.to.lat, cx, cy, R, 1.0);
    } else if(arc.head > 0.6){
      flashAt(arc.to.lon, arc.to.lat, cx, cy, R, 0.35);
    }
  }

  // 绘制反向弧线与粒子（多洲 -> China）
  for (const arc of arcsReverse) {
    if (arc.delay > 0) { arc.delay--; continue; }
    arc.head = (arc.head + arc.speed) % 1;

    const g = ctx.createLinearGradient(0, cy-R, 0, cy+R);
    g.addColorStop(0, `${opts.lineColor}00`);
    g.addColorStop(0.5, `${opts.lineColor}a0`);
    g.addColorStop(1, `${opts.lineColor}00`);
    ctx.strokeStyle = g;
    ctx.lineWidth = 1.3;

    ctx.beginPath();
    let started = false;
    for (let i=0;i<arc.path.length;i++){
      const p = arc.path[i];
      const pr = project(p.lon, p.lat, cx, cy, R, opts.rotLon, opts.rotLat);
      if (!pr.visible) { started = false; continue; }
      if (!started) { ctx.moveTo(pr.x, pr.y); started = true; }
      else { ctx.lineTo(pr.x, pr.y); }
    }
    ctx.stroke();

    const headIdx = Math.floor(arc.head * (arc.path.length-1));
    const tailLen = 16;
    for (let j=0;j<tailLen;j++){
      const idx = headIdx - j;
      if (idx < 0) break;
      const p = arc.path[idx];
      const pr = project(p.lon, p.lat, cx, cy, R, opts.rotLon, opts.rotLat);
      if(!pr.visible) continue;
      const alpha = Math.max(0, 1 - j/tailLen);
      ctx.fillStyle = `rgba(125,249,255,${alpha})`;
      ctx.beginPath();
      ctx.arc(pr.x, pr.y, 1.2 + (1-alpha)*1.1, 0, Math.PI*2);
      ctx.fill();
    }

    // 到达闪烁：中国落点
    if(arc.head > 0.88){
      flashAt(ORIGIN.lon, ORIGIN.lat, cx, cy, R, 1.0);
    } else if(arc.head > 0.6){
      flashAt(ORIGIN.lon, ORIGIN.lat, cx, cy, R, 0.35);
    }
  }

  // 反向源标签（按当前组显示）
  for(const s of reverseGroups[reverseGroup.value]){
    const name = s.name === 'NorthAmerica' ? 'North America'
               : s.name === 'SouthAmerica' ? 'South America'
               : s.name;
    drawLabel(name, s.lon, s.lat, cx, cy, R);
  }

  raf = requestAnimationFrame(draw);
}

/** 在给定经纬度绘制文本标签（仅在前半球可见时） */
function drawLabel(text:string, lon:number, lat:number, cx:number, cy:number, R:number){
  if(!ctx) return;
  const pr = project(lon, lat, cx, cy, R, opts.rotLon, opts.rotLat);
  if(!pr.visible) return;
  ctx.save();
  ctx.font = '600 13px "IBM Plex Sans", Segoe UI, Arial';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';
  const x = pr.x + 8;
  const y = pr.y - 10;
  // 文字描边与阴影增强可读性
  ctx.strokeStyle = 'rgba(0,0,0,.45)';
  ctx.lineWidth = 3;
  ctx.strokeText(text, x, y);
  ctx.fillStyle = 'rgba(200,240,255,.95)';
  ctx.fillText(text, x, y);
  // 发射点小标记
  ctx.fillStyle = opts.pulseColor;
  ctx.beginPath();
  ctx.arc(pr.x, pr.y, 2.4, 0, Math.PI*2);
  ctx.fill();
  ctx.restore();
}

function pulseAt(lon:number, lat:number, cx:number, cy:number, R:number){
  if(!ctx) return;
  const t = performance.now()/1000;
  const pr = project(lon, lat, cx, cy, R, opts.rotLon, opts.rotLat);
  if(!pr.visible) return;

  // 外圈呼吸
  for (let i=0;i<3;i++){
    const r = 3 + ( (t*0.8 + i*0.33) % 1 ) * 16;
    const a = 1 - (r/16);
    ctx.strokeStyle = `rgba(125,249,255,${Math.max(0,a)})`;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(pr.x, pr.y, r, 0, Math.PI*2);
    ctx.stroke();
  }
  // 核心点
  ctx.fillStyle = opts.pulseColor;
  ctx.beginPath();
  ctx.arc(pr.x, pr.y, 2.2, 0, Math.PI*2);
  ctx.fill();
}

function flashAt(lon:number, lat:number, cx:number, cy:number, R:number, intensity=1){
  if(!ctx) return;
  const t = performance.now()/1000;
  const pr = project(lon, lat, cx, cy, R, opts.rotLon, opts.rotLat);
  if(!pr.visible) return;
  for (let i=0;i<2;i++){
    const r = 4 + ( (t*1.2 + i*0.35) % 1 ) * 14;
    const a = (1 - (r/14)) * 0.8 * intensity;
    ctx.strokeStyle = `rgba(80,200,255,${Math.max(0,a)})`;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(pr.x, pr.y, r, 0, Math.PI*2);
    ctx.stroke();
  }
}

function resize() {
  if (!canvas.value) return;
  const parent = canvas.value.parentElement!;
  // 让容器维持 16:9（可按需调整）
  const w = parent.clientWidth;
  const h = Math.max(360, Math.min(parent.clientHeight || w * 0.56, w * 0.56));
  canvas.value.style.width = w + "px";
  canvas.value.style.height = h + "px";
}

onMounted(() => {
  const c = canvas.value!;
  ctx = c.getContext("2d");
  resize();
  window.addEventListener("resize", resize, { passive: true });
  // 交互：悬停暂停、自定义拖拽、点击轮换组
  const onEnter = () => { paused.value = true; c.style.cursor = 'grab'; };
  const onLeave = () => { paused.value = false; dragging.value = false; lastPt.value = null; c.style.cursor = ''; };
  const onDown = (e: PointerEvent) => { dragging.value = true; lastPt.value = { x: e.clientX, y: e.clientY }; c.setPointerCapture(e.pointerId); c.style.cursor='grabbing'; };
  const onMove = (e: PointerEvent) => {
    if (!dragging.value || !lastPt.value) return;
    const dx = e.clientX - lastPt.value.x; const dy = e.clientY - lastPt.value.y;
    opts.rotLon += dx * 0.2; opts.rotLat = Math.max(-85, Math.min(85, opts.rotLat - dy * 0.2));
    lastPt.value = { x: e.clientX, y: e.clientY };
  };
  const onUp = (e: PointerEvent) => { dragging.value = false; lastPt.value = null; try { c.releasePointerCapture(e.pointerId); } catch {} c.style.cursor='grab'; };
  const onClick = () => {
    const order: Array<typeof reverseGroup.value> = ['global','europe','americas','apac'];
    const idx = order.indexOf(reverseGroup.value);
    setReverseGroup(order[(idx+1)%order.length]);
  };
  c.addEventListener('pointerenter', onEnter);
  c.addEventListener('pointerleave', onLeave);
  c.addEventListener('pointerdown', onDown);
  c.addEventListener('pointermove', onMove);
  c.addEventListener('pointerup', onUp);
  c.addEventListener('click', onClick);

  // 加载更高保真洲 GeoJSON（50m/110m 回退到 lite）
  const tryUrls = ['/data/continents-50m.json','/data/continents-110m.json','/data/continents-lite.json'];
  (async ()=>{
    for(const url of tryUrls){
      try{
        const r = await fetch(url);
        if(!r.ok) continue;
        const data = await r.json();
        if (data && Array.isArray(data.features) && data.features.length > 0){
          continentsGeo = data; break;
        }
      }catch{ /* 忽略，继续回退 */ }
    }
  })().finally(()=>{ raf = requestAnimationFrame(draw); });

  // 清理监听
  onBeforeUnmount(() => {
    c.removeEventListener('pointerenter', onEnter);
    c.removeEventListener('pointerleave', onLeave);
    c.removeEventListener('pointerdown', onDown);
    c.removeEventListener('pointermove', onMove);
    c.removeEventListener('pointerup', onUp);
    c.removeEventListener('click', onClick);
  });
});

onBeforeUnmount(() => {
  cancelAnimationFrame(raf);
  window.removeEventListener("resize", resize);
});
</script>

<style scoped>
.globe-wrap{
  width: 100%;
  /* 父容器高度可在外部控制；这里给一个最小高度保障展示 */
  min-height: 420px;
  position: relative;
  background: radial-gradient(1200px 600px at 70% 10%, rgba(76,201,255,0.06), transparent 60%),
              radial-gradient(800px 400px at 20% 90%, rgba(125,249,255,0.05), transparent 60%),
              #02070b;
  border-radius: 1rem;
  box-shadow: 0 10px 40px rgba(0,0,0,.35);
  overflow: hidden;
}
canvas{ display:block; }
.globe-ctrls{
  position: absolute;
  bottom: 10px;
  left: 12px;
  display: flex;
  gap: 8px;
  padding: 6px 8px;
  border-radius: 10px;
  background: rgba(2,10,18,0.35);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  box-shadow: inset 0 0 0 1px rgba(255,255,255,0.07), 0 8px 20px rgba(0,0,0,0.25);
}
.globe-ctrls button{
  color: #d6f1ff;
  font-weight: 600;
  font-size: 12px;
  padding: 6px 10px;
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.18);
  background: linear-gradient(180deg, rgba(81,176,255,0.22), rgba(81,176,255,0.05));
  cursor: pointer;
}
.globe-ctrls button.active{
  color: #00111a;
  background: linear-gradient(180deg, rgba(125,249,255,0.9), rgba(76,201,255,0.7));
  border-color: rgba(125,249,255,0.9);
}
</style>
