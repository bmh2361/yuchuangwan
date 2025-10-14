import type { Directive } from 'vue'
export const reveal: Directive = {
  mounted(el){
    el.classList.add('reveal')
    const io = new IntersectionObserver((ents)=>{
      ents.forEach(e=>{ if(e.isIntersecting){ el.classList.add('show') } })
    },{threshold:0.15})
    io.observe(el)
  }
}
