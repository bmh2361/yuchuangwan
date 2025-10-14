import type { Directive } from 'vue'
export const tilt: Directive<HTMLElement, number> = {
  mounted(el, binding){
    const max = binding.value ?? 6
    el.style.willChange = 'transform'
    el.addEventListener('mousemove', (e: MouseEvent)=>{
      const r = el.getBoundingClientRect()
      const cx = e.clientX - r.left
      const cy = e.clientY - r.top
      const rx = ((cy/r.height) - 0.5) * -2 * max
      const ry = ((cx/r.width) - 0.5) * 2 * max
      el.style.transform = `perspective(600px) rotateX(${rx}deg) rotateY(${ry}deg)`
    })
    el.addEventListener('mouseleave', ()=>{
      el.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg)'
      el.style.transition = 'transform .2s ease'
      setTimeout(()=> el.style.transition = '', 220)
    })
  }
}
