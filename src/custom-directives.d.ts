// 补充声明（部分编辑器在严格模式下未即时解析 .ts 导出为模块时的兜底）
declare module './reveal' {
  import type { Directive } from 'vue'
  export const reveal: Directive
}
declare module './plugins/countup' {
  import type { Directive } from 'vue'
  export const countup: Directive<HTMLElement, number | {end:number;duration?:number}>
}
declare module './plugins/tilt' {
  import type { Directive } from 'vue'
  export const tilt: Directive<HTMLElement, number>
}
