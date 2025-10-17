<template></template>
<script setup lang="ts">
// GlobeFlow 已移除实现，保留空组件占位；当前项目未引用该组件。
</script>
<style scoped></style>
<template></template>
<script setup lang="ts">
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
