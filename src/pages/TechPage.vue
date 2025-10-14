<template>
  <div class="tech-wrapper" v-reveal>
    <section class="tech-hero container">
      <div class="hero-bg-layer" aria-hidden="true"></div>
  <h1 class="tech-title">{{ t('tech.hero.title') }}</h1>
  <p class="tech-sub">{{ t('tech.hero.sub') }}</p>
      <div class="tech-stats">
        <div class="stat-card" v-for="s in stats" :key="s.key">
          <div class="val">{{ s.val }}</div>
          <div class="lab">{{ t(s.label) }}</div>
        </div>
      </div>
    </section>
      <section class="tech-categories container" v-reveal>
        <h2 class="cat-heading">{{ t('tech.cat.heading') }}</h2>
        <p class="cat-intro">{{ t('tech.cat.intro') }}</p>
        <div class="cat-grid">
          <div v-for="c in categories" :key="c.slug" class="cat-card" v-tilt>
            <div class="icon-wrap" :style="{ '--accent': c.color }">
              <div class="icon-shape" v-html="c.icon" />
            </div>
            <h3>{{ t(`tech.cat.${c.slug}.title`) }}</h3>
            <p>{{ t(`tech.cat.${c.slug}.desc`) }}</p>
          </div>
        </div>
      </section>
    <section class="collab-section container" v-reveal>
      <h2 class="collab-heading">{{ t('tech.collab.heading') }}</h2>
      <p class="collab-intro">{{ t('tech.collab.intro') }}</p>
      <div class="collab-grid">
        <div v-for="m in modes" :key="m.key" class="collab-card" v-tilt>
          <div class="c-icon" :style="{ '--accent': m.color }" v-html="m.icon" />
          <h3>{{ t(`tech.collab.${m.key}.title`) }}</h3>
          <p class="l1">{{ t(`tech.collab.${m.key}.l1`) }}</p>
          <p class="l2">{{ t(`tech.collab.${m.key}.l2`) }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { t } from '../i18n'
// 分类配置（后续可迁移到单独数据文件）
interface Category { slug: string; icon: string; color: string }
const categories: Category[] = [
  { slug:'materials', color:'#2e7dff', icon:`<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="m12 2 7 4v6c0 5-3 8-7 10-4-2-7-5-7-10V6l7-4Z"/><path d="M5 6c4 2.5 10 2.5 14 0"/></svg>` },
  { slug:'manufacturing', color:'#1c9a6d', icon:`<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9.4 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09c.7 0 1.31-.4 1.51-1a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06c.46.46 1.12.61 1.82.33H10a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09c0 .7.4 1.31 1 1.51.61.19 1.31.05 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06c-.46.46-.61 1.12-.33 1.82V10c.19.61.8 1 1.51 1H21a2 2 0 0 1 0 4h-.09c-.7 0-1.31.4-1.51 1Z"/></svg>` },
  { slug:'ai', color:'#7a3df0', icon:`<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>` },
  { slug:'green', color:'#1492e6', icon:`<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c4-1 8-5 8-10V5l-8-3-8 3v7c0 5 4 9 8 10Z"/><path d="M10 10c0 .5.5 1 1 1 .6 0 1-.5 1-1V8h1"/><path d="M14 14c0 .5-.5 1-1 1-.6 0-1-.5-1-1v-2h-1"/></svg>` },
  { slug:'bio', color:'#ff6a5b', icon:`<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="M8 11h8"/><path d="M12 8v6"/></svg>` },
  { slug:'energy', color:'#f0a500', icon:`<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z"/></svg>` },
]
// 科研合作模式配置
interface Mode { key:string; icon:string; color:string }
const modes: Mode[] = [
  { key:'joint', color:'#2e7dff', icon:`<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12l3 6-9 12L3 9l3-6Z"/><path d="M2 9h20"/><path d="M12 22 9 9l3-6 3 6-3 13Z"/></svg>` },
  { key:'transfer', color:'#1c9a6d', icon:`<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M8 17v-6h8v6"/><path d="M12 13v4"/><rect x="3" y="3" width="18" height="6" rx="1"/><path d="M18 17h2v4H4v-4h2"/></svg>` },
  { key:'outsourcing', color:'#7a3df0', icon:`<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 2 7l10 5 10-5-10-5Z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/></svg>` },
  { key:'incubation', color:'#ff6a5b', icon:`<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c4-1 8-5 8-10V5l-8-3-8 3v7c0 5 4 9 8 10Z"/><path d="M9 12h6"/><path d="M12 9v6"/></svg>` },
]
// 顶部统计
const stats = [
  { key:'tech', val:'500+', label:'tech.stats.techs' },
  { key:'fields', val:'20+', label:'tech.stats.fields' },
  { key:'custom', val:t('tech.stats.customVal'), label:'tech.stats.custom' },
]
</script>

<style scoped>
.tech-wrapper{position:relative;padding-top:40px}
.tech-hero{position:relative;padding:86px 0 70px;text-align:center}
.tech-hero:before{content:"";position:absolute;inset:0;pointer-events:none;background:
  radial-gradient(900px 520px at 50% 10%,rgba(56,140,225,.30),rgba(56,140,225,0) 70%),
  linear-gradient(180deg,rgba(224,236,248,.85) 0%,rgba(214,230,244,.70) 55%,rgba(206,226,242,.55) 100%);
  mix-blend-mode:normal;opacity:.95;}
.hero-bg-layer{position:absolute;inset:0;background:
  repeating-linear-gradient(90deg,rgba(40,115,205,.08) 0 1px,transparent 1px 60px),
  repeating-linear-gradient(0deg,rgba(40,115,205,.08) 0 1px,transparent 1px 60px);
  mask:linear-gradient(180deg,rgba(0,0,0,.0) 0%,rgba(0,0,0,.75) 55%,rgba(0,0,0,0) 100%);
  animation:gridFloat 34s linear infinite;opacity:.55;}
@keyframes gridFloat {0%{transform:translateY(0)}100%{transform:translateY(-60px)}}
.tech-title{position:relative;margin:0 0 18px;font-size:clamp(38px,5vw,54px);font-weight:800;letter-spacing:.6px;background:linear-gradient(95deg,#123153 0%,#195894 25%,#2373c8 48%,#2e7dff 65%,#55beff 82%,#9de9ff 100%);-webkit-background-clip:text;color:transparent;filter:drop-shadow(0 6px 18px rgba(60,140,220,.25)) drop-shadow(0 2px 4px rgba(0,0,0,.32));}
.tech-sub{position:relative;margin:0 auto 34px;max-width:860px;font-size:16px;line-height:1.55;color:#2d4e6d;letter-spacing:.3px;text-wrap:balance}
.tech-stats{position:relative;display:flex;justify-content:center;gap:34px;flex-wrap:wrap;margin:0 auto;max-width:980px}
.stat-card{--bd:rgba(150,190,225,.75);position:relative;min-width:200px;padding:26px 26px 30px;border:1px solid var(--bd);border-radius:22px;background:linear-gradient(160deg,rgba(255,255,255,.92),rgba(242,247,252,.90) 60%,rgba(230,240,248,.92));backdrop-filter:blur(10px) saturate(170%);box-shadow:0 10px 34px -14px rgba(18,54,95,.35),0 4px 16px -4px rgba(30,80,140,.24);text-align:center;transition:transform .35s ease, box-shadow .35s ease,border-color .35s ease}
.stat-card:hover{transform:translateY(-8px);border-color:rgba(110,170,215,.95);box-shadow:0 20px 50px -18px rgba(18,58,105,.50),0 10px 30px -12px rgba(36,90,155,.34)}
.stat-card .val{font-size:38px;font-weight:700;line-height:1.05;margin:0 0 6px;background:linear-gradient(88deg,#15345c,#2e7dff 55%,#6ab9ff);-webkit-background-clip:text;color:transparent;letter-spacing:.6px;}
.stat-card .lab{font-size:13px;letter-spacing:.8px;color:#4f6d89;text-transform:uppercase;font-weight:600}
.collab-section{padding:10px 0 140px}
.collab-heading{margin:0 0 12px;font-size:30px;font-weight:700;letter-spacing:.6px;background:linear-gradient(90deg,#16406d,#2e7dff 55%,#6ec4ff);-webkit-background-clip:text;color:transparent}
.collab-intro{margin:0 0 40px;color:#34526a;font-size:15px;max-width:760px}
.collab-grid{display:grid;gap:30px;grid-template-columns:repeat(4,minmax(0,1fr))}
@media (max-width:1080px){.collab-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (max-width:560px){.collab-grid{grid-template-columns:1fr}}
.collab-card{position:relative;display:flex;flex-direction:column;gap:6px;padding:28px 24px 34px;border:1px solid rgba(90,140,175,.78);border-radius:22px;background:linear-gradient(170deg,rgba(255,255,255,.95),rgba(242,247,252,.90) 60%,rgba(232,240,248,.92));backdrop-filter:blur(14px) saturate(175%);box-shadow:0 10px 34px -14px rgba(18,54,95,.38),0 4px 16px -4px rgba(30,80,140,.26);transition:transform .4s ease, box-shadow .4s ease,border-color .4s ease}
.collab-card:before{content:"";position:absolute;inset:0;border-radius:22px;background:linear-gradient(140deg,rgba(255,255,255,.55),rgba(255,255,255,.15));mix-blend-mode:overlay;pointer-events:none;opacity:0;transition:opacity .4s ease}
.collab-card:hover{transform:translateY(-10px);border-color:rgba(110,170,215,.95);box-shadow:0 24px 60px -18px rgba(18,58,105,.50),0 14px 38px -14px rgba(36,90,155,.34)}
.collab-card:hover:before{opacity:1}
.collab-card h3{margin:0 0 6px;font-size:18px;font-weight:700;color:#032540;letter-spacing:.5px}
.collab-card p{margin:0;font-size:13.5px;line-height:1.55;color:#114066}
.c-icon{width:56px;height:56px;display:flex;align-items:center;justify-content:center;border-radius:18px;background:linear-gradient(145deg,var(--accent,#2e7dff) 0%,rgba(255,255,255,.15) 120%);color:#fff;box-shadow:0 6px 16px -4px var(--accent,#2e7dff),0 0 0 1px rgba(255,255,255,.4) inset;filter:drop-shadow(0 10px 22px rgba(40,90,160,.35));margin-bottom:4px;position:relative}
.c-icon:after{content:"";position:absolute;inset:0;border-radius:inherit;background:linear-gradient(180deg,rgba(255,255,255,.45),rgba(255,255,255,.05));mix-blend-mode:overlay;pointer-events:none}
.tech-categories{padding:40px 0 120px}
.cat-heading{margin:0 0 10px;font-size:30px;font-weight:700;letter-spacing:.6px;background:linear-gradient(90deg,#16406d,#2e7dff 55%,#6ec4ff);-webkit-background-clip:text;color:transparent}
.cat-intro{margin:0 0 34px;color:#34526a;font-size:15px;max-width:720px}
.cat-grid{display:grid;gap:30px;grid-template-columns:repeat(3,minmax(0,1fr))}
@media (max-width:960px){.cat-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (max-width:560px){.cat-grid{grid-template-columns:1fr}}
.cat-card{position:relative;display:flex;flex-direction:column;gap:12px;padding:26px 24px 30px;border:1px solid rgba(90,140,175,.78);border-radius:22px;background:linear-gradient(170deg,rgba(255,255,255,.94),rgba(242,247,252,.90) 60%,rgba(232,240,248,.92));backdrop-filter:blur(12px) saturate(175%);text-decoration:none;box-shadow:0 10px 34px -14px rgba(18,54,95,.38),0 4px 16px -4px rgba(30,80,140,.26);transition:transform .4s ease, box-shadow .4s ease,border-color .4s ease}
.cat-card:before{content:"";position:absolute;inset:0;border-radius:22px;background:linear-gradient(140deg,rgba(255,255,255,.55),rgba(255,255,255,.15));mix-blend-mode:overlay;pointer-events:none;opacity:0;transition:opacity .4s ease}
.cat-card:hover{transform:translateY(-10px);border-color:rgba(110,170,215,.95);box-shadow:0 22px 54px -18px rgba(18,58,105,.50),0 12px 34px -14px rgba(36,90,155,.34)}
.cat-card:hover:before{opacity:1}
.cat-card h3{margin:0;font-size:18px;font-weight:700;color:#032540;letter-spacing:.5px}
.cat-card p{margin:0 0 4px;font-size:13.5px;line-height:1.55;color:#114066}
.cat-card .more{margin-top:auto;font-size:12px;letter-spacing:.6px;font-weight:600;color:#1b57b3;opacity:.85}
.icon-wrap{width:54px;height:54px;display:flex;align-items:center;justify-content:center;border-radius:16px;background:linear-gradient(140deg,var(--accent,#2e7dff) 0%,rgba(255,255,255,.12) 120%);position:relative;color:#fff;filter:drop-shadow(0 8px 18px rgba(40,90,160,.35));box-shadow:0 0 0 1px rgba(255,255,255,.35) inset;--accent:var(--accent,#2e7dff)}
.icon-wrap:after{content:"";position:absolute;inset:0;border-radius:inherit;background:linear-gradient(180deg,rgba(255,255,255,.45),rgba(255,255,255,.05));mix-blend-mode:overlay;pointer-events:none}
.icon-shape{display:flex}
.icon-wrap{background:linear-gradient(145deg,var(--accent) 0%,rgba(255,255,255,.15) 120%);}
.icon-wrap[style]{box-shadow:0 8px 20px -6px var(--accent);}

/* 自定义颜色注入 */
[style*="#1c9a6d"]{--accent:#1c9a6d}
[style*="#7a3df0"]{--accent:#7a3df0}
[style*="#1492e6"]{--accent:#1492e6}
[style*="#ff6a5b"]{--accent:#ff6a5b}
[style*="#f0a500"]{--accent:#f0a500}
@media (max-width:840px){
  .tech-title{font-size:clamp(34px,6.4vw,48px)}
  .stat-card{min-width:170px;padding:22px 22px 26px}
  .stat-card .val{font-size:34px}
}
@media (max-width:560px){
  .tech-hero{padding:78px 0 60px}
  .tech-stats{gap:22px}
  .stat-card{min-width:150px}
  .stat-card .val{font-size:30px}
  .tech-sub{font-size:15px;margin-bottom:28px}
}
</style>
