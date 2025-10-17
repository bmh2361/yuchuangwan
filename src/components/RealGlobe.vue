<template>
  <div class="globe3d-wrap" ref="root" @mouseenter="paused=true" @mouseleave="paused=false"></div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, watch } from 'vue'
import * as THREE from 'three'

// 公开属性：目的地组（与 GlobeFlow 对齐）
const props = defineProps<{ group?: 'global'|'europe'|'americas'|'apac' }>()
const emit = defineEmits<{ (e:'update:group', v:'global'|'europe'|'americas'|'apac'): void }>()

const root = ref<HTMLDivElement|null>(null)
let renderer: THREE.WebGLRenderer | null = null
let scene: THREE.Scene | null = null
let camera: THREE.PerspectiveCamera | null = null
let frame = 0
const paused = ref(false)
let dragging = false
let lastX = 0, lastY = 0
let rotLon = 80, rotLat = 28

// 基础地球体与海色
let globeMesh: THREE.Mesh | null = null
let lineGroup: THREE.Group | null = null
let continentsGroup: THREE.Group | null = null
let globeRadius = 260

function latlonToVec3(lon:number, lat:number, radius:number){
  const phi = THREE.MathUtils.degToRad(90 - lat)
  const theta = THREE.MathUtils.degToRad(lon + 180)
  const x = -radius * Math.sin(phi) * Math.cos(theta)
  const z =  radius * Math.sin(phi) * Math.sin(theta)
  const y =  radius * Math.cos(phi)
  return new THREE.Vector3(x,y,z)
}

function setupScene(w:number, h:number){
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(50, w/h, 0.1, 2000)
  camera.position.set(0, 0, 520)

  const ambient = new THREE.AmbientLight(0xbfd9ff, 0.8)
  const dir = new THREE.DirectionalLight(0xffffff, 0.95)
  dir.position.set(2,1,3)
  scene.add(ambient, dir)

  // 海洋球体
  const R = globeRadius
  const geo = new THREE.SphereGeometry(R, 128, 96)
  const mat = new THREE.MeshPhongMaterial({
    color: 0x0a1f2d,
    emissive: 0x06131d,
    emissiveIntensity: 0.25,
    shininess: 12,
    specular: new THREE.Color(0x3ecbff).multiplyScalar(0.15),
  })
  globeMesh = new THREE.Mesh(geo, mat)
  scene.add(globeMesh)

  // 大气辉光（略）
  const glowGeo = new THREE.SphereGeometry(R*1.02, 64, 48)
  const glowMat = new THREE.MeshBasicMaterial({ color: 0x78d7ff, transparent:true, opacity:0.06 })
  const glow = new THREE.Mesh(glowGeo, glowMat)
  scene.add(glow)

  // 经纬网（淡化，仅作参照）
  lineGroup = new THREE.Group()
  const gridMat = new THREE.LineBasicMaterial({ color: 0x6ec4ff, opacity:0.18, transparent:true })
  for(let lat=-60; lat<=60; lat+=30){
    const pts: THREE.Vector3[] = []
    for(let lon=-180; lon<=180; lon+=3){ pts.push(latlonToVec3(lon, lat, R+0.5)) }
    const g = new THREE.BufferGeometry().setFromPoints(pts)
    lineGroup.add(new THREE.Line(g, gridMat))
  }
  for(let lon=-180; lon<180; lon+=30){
    const pts: THREE.Vector3[] = []
    for(let lat=-80; lat<=80; lat+=3){ pts.push(latlonToVec3(lon, lat, R+0.5)) }
    const g = new THREE.BufferGeometry().setFromPoints(pts)
    lineGroup.add(new THREE.Line(g, gridMat))
  }
  scene.add(lineGroup)

  // 洲轮廓组（加载 GeoJSON 后填充）
  continentsGroup = new THREE.Group()
  scene.add(continentsGroup)
}

function applyRotation(){
  if(!scene) return
  // 旋转到指定经纬（类似相机围绕Y/X）
  scene.rotation.y = THREE.MathUtils.degToRad(rotLon)
  scene.rotation.x = THREE.MathUtils.degToRad(rotLat)
}

function animate(){
  if(!renderer || !scene || !camera) return
  frame = requestAnimationFrame(animate)
  if(!paused.value && !dragging) rotLon += 0.18
  applyRotation()
  renderer.render(scene, camera)
}

function onResize(){
  if(!renderer || !camera || !root.value) return
  const w = root.value.clientWidth || 800
  const h = Math.max(360, Math.min(root.value.clientHeight || w*0.56, w*0.56))
  renderer.setSize(w, h, false)
  camera.aspect = w/h
  camera.updateProjectionMatrix()
}

onMounted(()=>{
  if(!root.value) return
  const w = root.value.clientWidth || 800
  const h = Math.max(360, Math.min(root.value.clientHeight || w*0.56, w*0.56))
  renderer = new THREE.WebGLRenderer({ antialias:true, alpha:true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio||1, 2))
  renderer.setSize(w, h, false)
  root.value.appendChild(renderer.domElement)

  setupScene(w,h)
  onResize()
  window.addEventListener('resize', onResize, { passive:true })

  // 加载更高保真洲 GeoJSON（50m → 110m → lite 回退）并绘制到球体上
  const tryUrls = ['/data/continents-50m.json','/data/continents-110m.json','/data/continents-lite.json']
  ;(async()=>{
    for(const url of tryUrls){
      try{
        const r = await fetch(url)
        if(!r.ok) continue
        const data = await r.json()
        if(data && Array.isArray(data.features) && data.features.length>0){
          drawContinents(data)
          break
        }
      }catch{/* continue */}
    }
  })()

  // 拖拽旋转
  const el = renderer.domElement
  const down = (e:PointerEvent)=>{ dragging = true; lastX=e.clientX; lastY=e.clientY; el.setPointerCapture(e.pointerId); el.style.cursor='grabbing' }
  const move = (e:PointerEvent)=>{ if(!dragging) return; const dx=e.clientX-lastX, dy=e.clientY-lastY; rotLon += dx*0.25; rotLat = Math.max(-85, Math.min(85, rotLat - dy*0.25)); lastX=e.clientX; lastY=e.clientY }
  const up = (e:PointerEvent)=>{ dragging=false; try{ el.releasePointerCapture(e.pointerId) }catch{} el.style.cursor='grab' }
  el.addEventListener('pointerdown', down)
  el.addEventListener('pointermove', move)
  el.addEventListener('pointerup', up)

  animate()

  onBeforeUnmount(()=>{
    el.removeEventListener('pointerdown', down)
    el.removeEventListener('pointermove', move)
    el.removeEventListener('pointerup', up)
  })
})

onBeforeUnmount(()=>{
  cancelAnimationFrame(frame)
  window.removeEventListener('resize', onResize)
  if(renderer){ renderer.dispose(); renderer = null }
  scene = null; camera = null
})

// 响应外部 group 的变更（预留：在此可按组绘制不同弧线/标注）
watch(()=>props.group, (g)=>{ if(!g) return; emit('update:group', g) })

function drawContinents(geojson:any){
  if(!continentsGroup) return
  // 清空旧内容
  for(let i=continentsGroup.children.length-1;i>=0;i--){
    const obj = continentsGroup.children[i]
    continentsGroup.remove(obj)
  }
  const lineMat = new THREE.LineBasicMaterial({ color: 0xcde9ff, opacity:0.85, transparent:true, linewidth:1 })
  const R = globeRadius + 1
  const features = geojson.features as Array<any>
  for(const f of features){
    const geom = f.geometry
    if(!geom) continue
    const addRing = (ring:number[][])=>{
      const pts: THREE.Vector3[] = []
      for(const coord of ring){
        const lon = coord[0]
        const lat = coord[1]
        pts.push(latlonToVec3(lon, lat, R))
      }
      if(pts.length>1){
        const g = new THREE.BufferGeometry().setFromPoints(pts)
        const loop = new THREE.LineLoop(g, lineMat)
        continentsGroup!.add(loop)
      }
    }
    if(geom.type === 'Polygon'){
      const rings:number[][][] = geom.coordinates
      if(rings?.length) addRing(rings[0])
    }else if(geom.type === 'MultiPolygon'){
      for(const poly of geom.coordinates){ if(poly?.length) addRing(poly[0]) }
    }
  }
}
</script>

<style scoped>
.globe3d-wrap{
  width: 100%;
  min-height: 420px;
  position: relative;
  background: radial-gradient(1200px 600px at 70% 10%, rgba(76,201,255,0.06), transparent 60%),
              radial-gradient(800px 400px at 20% 90%, rgba(125,249,255,0.05), transparent 60%),
              #02070b;
  border-radius: 1rem;
  box-shadow: 0 10px 40px rgba(0,0,0,.35);
  overflow: hidden;
}
</style>
