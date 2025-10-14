import type { Directive } from 'vue'

export const countup: Directive<HTMLElement, number | {end:number;duration?:number}> = {
  mounted(el, binding){
    const cfg = typeof binding.value === 'number' ? {end: binding.value, duration: 1200} : {duration:1200, end: 0, ...(binding.value||{})}
    const start = 0
    const end = Math.max(0, cfg.end)
    const dur = cfg.duration ?? 1200
    let raf = 0
    const fmt = (v:number)=>{
      if(end>=1000) return Math.round(v).toLocaleString('zh-CN')
      return Math.round(v).toString()
    }
    const startAt = performance.now()
    const tick = (t:number)=>{
      const p = Math.min(1, (t - startAt)/dur)
      const eased = 1 - Math.pow(1-p, 3)
      const val = start + (end-start)*eased
      el.textContent = fmt(val)
      if(p<1){ raf = requestAnimationFrame(tick) }
    }
    const io = new IntersectionObserver((ents)=>{
      ents.forEach(e=>{ if(e.isIntersecting){ requestAnimationFrame(tick); io.disconnect() } })
    },{threshold:0.4})
    io.observe(el)
    el.addEventListener('DOMNodeRemoved', ()=> cancelAnimationFrame(raf), {once:true})
  }
}
