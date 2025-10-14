<script setup lang="ts">
import { onMounted, ref } from 'vue'
const track = ref<HTMLDivElement|null>(null)
import { site } from '../content/site'
const logos = site.clients

onMounted(()=>{
  const el = track.value
  if(!el) return
  let id:number
  const loop = ()=>{
    el.scrollLeft += 1
    if(el.scrollLeft + el.clientWidth >= el.scrollWidth-2){ el.scrollLeft = 0 }
    id = requestAnimationFrame(loop)
  }
  id = requestAnimationFrame(loop)
})
</script>
<template>
  <section id="clients">
    <div class="container">
      <header class="section-header"><h2>服务对象</h2></header>
      <div style="position:relative;padding:6px 38px">
        <div ref="track" style="display:grid;grid-auto-flow:column;grid-auto-columns:180px;gap:16px;overflow:hidden">
          <div v-for="n in logos.concat(logos)" :key="n" class="card" style="height:72px;display:grid;place-items:center;background:#fff">
            <img :alt="n" :src="`/images/logos/${n}.png`" style="max-height:46px" @error="($event)=>{ ($event.target as HTMLImageElement).src='data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'200\' height=\'60\'><rect width=\'100%\' height=\'100%\' fill=\'white\'/><text x=\'50%\' y=\'50%\' dominant-baseline=\'middle\' text-anchor=\'middle\' fill=\'#999\' font-family=\'Arial\' font-size=\'14\'>LOGO</text></svg>' }"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
