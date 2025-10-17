<template>
  <div class="ic-page">
    <!-- ① Hero：总体介绍区 -->
    <section class="ic-hero" v-reveal>
      <div class="hero-bg" aria-hidden="true"></div>
      <div class="container hero-inner">
        <div class="hero-left">
          <h1 class="hero-title">产业合作 <span class="en">Industrial Collaboration</span></h1>
          <p class="hero-sub">
            “育创湾（VisionTech Bay）致力于构建‘科技—产业—资本—政策’协同生态，
            通过与政府、投资机构、国内外高校及科研单位的长期合作，
            推动科研成果转化、产业升级与全球创新网络建设。”
          </p>
          <div class="rotator" :key="activePhrase">
            <span class="rotator-text">{{ activePhrase }}</span>
          </div>
        </div>
        <aside class="hero-right">
          <div class="cta-card" v-tilt>
            <div class="cta-head">
              <div class="cta-emoji" aria-hidden="true">🤝</div>
              <div>
                <h3>联系我们 · 加入育创湾</h3>
                <p>对接合作/入驻，获取高校与产业资源撮合服务。</p>
              </div>
            </div>
            <div class="cta-actions">
              <RouterLink class="btn primary" :to="{ name: 'contact' }" aria-label="联系育创湾">联系我们</RouterLink>
              <RouterLink class="btn ghost" :to="{ name: 'contact', query: { type: 'join' } }" aria-label="加入育创湾">加入育创湾</RouterLink>
            </div>
          </div>
        </aside>
      </div>
    </section>

    <!-- ② 合作体系区 -->
    <section class="ic-collab container" v-reveal>
      <!-- 模块 1：政府合作 -->
      <div class="ic-module">
        <header class="ic-head">
          <div class="emoji" aria-hidden="true">🏛</div>
          <div>
            <h2>中国地方政府合作</h2>
            <p>育创湾与多地政府及园区共建科技创新平台，通过“产业链招商 + 平台化运营 + 数据驱动管理”，打造可持续的区域成果转化生态。</p>
          </div>
        </header>
        <div class="cards g3">
          <article class="c-card" v-tilt>
            <h3>政府园区共建模式</h3>
            <p>以高校科研成果为核心资源，建设区域转化中心和示范实验室。</p>
          </article>
          <article class="c-card" v-tilt>
            <h3>科技招商与创新集群</h3>
            <p>协助地方政府制定产业引进规划，吸引科技型企业落地。</p>
          </article>
          <article class="c-card" v-tilt>
            <h3>政策评估与数据闭环</h3>
            <p>构建长期绩效追踪体系，反馈数据助力政策优化。</p>
          </article>
        </div>
        <!-- 政府合作 logo 墙 -->
        <div class="logo-wall gov">
          <div class="logo-card" v-for="l in govLogos" :key="'gov-'+l.name">
            <img :src="`/gov-logos/${l.name}.png`" :alt="l.alt" @error="onImgError" />
          </div>
        </div>
      </div>

      <!-- 模块 2：投资合作 -->
      <div class="ic-module">
        <header class="ic-head">
          <div class="emoji" aria-hidden="true">💰</div>
          <div>
            <h2>中国投资与资本合作</h2>
            <p>育创湾联合产业基金、政府专项及社会资本，共同推动硬科技项目的成果转化和规模化发展，形成“服务 + 投资”双轮驱动模式。</p>
          </div>
        </header>
        <div class="cards g3">
          <article class="c-card" v-tilt>
            <h3>联合投资平台</h3>
            <p>搭建政府基金与企业资本协同机制，支持科研成果 PoC 与孵化。</p>
          </article>
          <article class="c-card" v-tilt>
            <h3>成果转化专项基金</h3>
            <p>以硬科技项目为核心标的，提供早期阶段股权或 PoC 资金支持。</p>
          </article>
          <article class="c-card" v-tilt>
            <h3>投后赋能体系</h3>
            <p>提供产业对接、技术顾问与政策资源，形成闭环孵化网络。</p>
          </article>
        </div>
        <!-- 投资合作 logo 墙 -->
        <div class="logo-wall invest">
          <div class="logo-card" v-for="l in investLogos" :key="'invest-'+l.name">
            <!-- 首选 invest-logs，失败时 onImgError 自动尝试 jpg，再尝试 invest-logos，然后占位 -->
            <img :src="`/invest-logs/${l.name}.png`" :alt="l.alt" @error="onImgError" />
          </div>
        </div>
      </div>

      <!-- 模块 3（合并）：高校与科研机构合作 -->
      <div class="ic-module">
        <header class="ic-head">
          <div class="emoji" aria-hidden="true">🎓</div>
          <div>
            <h2>高校与科研机构合作</h2>
            <p>育创湾服务多所中国“双一流”高校并拓展国际合作网络，提供从专利确权、流程优化到产业化落地的全链条服务，联合共建实验室与标准共研平台。</p>
          </div>
        </header>
        <div class="cards g3">
          <article class="c-card" v-tilt>
            <h3>科研成果转化中心</h3>
            <p>提供校内流程代办、IP 规划与商业方案设计。</p>
          </article>
          <article class="c-card" v-tilt>
            <h3>校企联合研发</h3>
            <p>以产业需求为导向，共建实验室与应用研究项目。</p>
          </article>
          <article class="c-card" v-tilt>
            <h3>成果落地与产业孵化</h3>
            <p>对接政府园区与中试平台，加速科研成果商业化。</p>
          </article>
          <article class="c-card" v-tilt>
            <h3>中英联合实验室</h3>
            <p>搭建科研与产业协同空间，推动跨国技术验证与测试。</p>
          </article>
          <article class="c-card" v-tilt>
            <h3>国际成果转化通道</h3>
            <p>支持海外技术在中国园区中试、落地与本地化生产。</p>
          </article>
          <article class="c-card" v-tilt>
            <h3>学术顾问与标准共建</h3>
            <p>与欧洲科学院及英国科研机构合作，参与国际标准制定与成果评估。</p>
          </article>
        </div>
        <!-- 高校与科研机构 logo 墙 -->
        <div class="logo-wall uni">
          <div class="logo-card" v-for="l in uniLogos" :key="'uni-'+l.name">
            <img :src="`/logos/${l.name}.png`" :alt="l.alt" @error="onImgError" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const phrases = ['技术转移','国际合作','产业共创','政策赋能']
const idx = ref(0)
const activePhrase = ref(phrases[0])
let timer: number | undefined

onMounted(()=>{
  timer = window.setInterval(()=>{
    idx.value = (idx.value + 1) % phrases.length
    activePhrase.value = phrases[idx.value]
  }, 2600)
})
onBeforeUnmount(()=>{ if(timer) window.clearInterval(timer) })

// Logo 墙数据（数字序号）
const govLogos = Array.from({ length: 10 }, (_, i) => ({ name: String(i+1), alt: `政府合作 Logo ${i+1}` }))
const investLogos = Array.from({ length: 16 }, (_, i) => ({ name: String(i+1), alt: `投资合作 Logo ${i+1}` }))
const uniLogos = Array.from({ length: 12 }, (_, i) => ({ name: String(i+1), alt: `高校/科研机构 Logo ${i+1}` }))

const placeholder = `data:image/svg+xml;utf8,
<svg xmlns='http://www.w3.org/2000/svg' width='320' height='120' viewBox='0 0 320 120'>
  <defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0%' stop-color='%23ffffff'/><stop offset='100%' stop-color='%23f5faff'/></linearGradient></defs>
  <rect x='0.5' y='0.5' width='319' height='119' rx='14' fill='url(%23g)' stroke='%23c9d9eb'/>
  <text x='50%' y='52%' fill='%236682a3' font-size='18' font-weight='700' text-anchor='middle' dominant-baseline='middle'>LOGO</text>
  <text x='50%' y='72%' fill='%238ea4bf' font-size='11' text-anchor='middle' dominant-baseline='middle'>未提供图片时占位</text>
</svg>`

function onImgError(e: Event){
  const el = e.target as HTMLImageElement
  if(!el) return
  const src = el.getAttribute('src') || ''
  const removeCard = ()=>{
    const card = (el.closest?.('.logo-card') as HTMLElement|null)
    if(card) card.remove()
  }
  // 高校/科研机构（/logos/）不再显示占位：png -> jpg，仍失败则移除卡片
  if(src.includes('/logos/')){
    if(/\.png$/i.test(src)){ el.src = src.replace(/\.png$/i, '.jpg'); return }
    if(/\.jpe?g$/i.test(src)){ removeCard(); return }
    removeCard(); return
  }
  // 投资 logos：优先 invest-logs -> jpg -> invest-logos -> jpg -> 占位
  if(src.includes('/invest-logs/')){
    if(/\.png$/i.test(src)){ el.src = src.replace(/\.png$/i, '.jpg'); return }
    if(/\.jpe?g$/i.test(src)){ el.src = src.replace('/invest-logs/','/invest-logos/').replace(/\.jpe?g$/i,'.png'); return }
  }
  if(src.includes('/invest-logos/')){
    if(/\.png$/i.test(src)){ el.src = src.replace(/\.png$/i, '.jpg'); return }
    if(/\.jpe?g$/i.test(src)){ el.src = placeholder; return }
  }
  // 通用 png -> jpg 再占位
  if(/\.png$/i.test(src)){ el.src = src.replace(/\.png$/i, '.jpg'); return }
  if(/\.jpe?g$/i.test(src)){ el.src = placeholder; return }
  el.src = placeholder
}
</script>

<style scoped>
.ic-page{position:relative}
/* Hero */
.ic-hero{position:relative;overflow:hidden}
.hero-bg{position:absolute;inset:0;background:
  radial-gradient(900px 360px at 20% -10%, rgba(140,190,255,.35), rgba(140,190,255,0) 70%),
  linear-gradient(180deg,#f2f7fc 0%,#eef5fb 100%)}
.hero-inner{position:relative;display:grid;grid-template-columns:1fr;gap:18px;align-items:start;padding:70px 0}
.hero-title{margin:0 0 10px;font-size:clamp(30px,5vw,48px);font-weight:800;letter-spacing:.4px;color:#0a2647}
.hero-title .en{display:inline-block;margin-left:8px;font-size:16px;color:#2a64a2;letter-spacing:.6px}
.hero-sub{margin:0 0 14px;max-width:820px;color:#1a4169;opacity:.95;line-height:1.7}
.rotator{min-height:28px}
.rotator-text{display:inline-block;padding:6px 10px;border-radius:999px;background:#e9f2ff;border:1px solid #c7defb;color:#1a4b8f;font-weight:700;animation:fade .6s ease}
@keyframes fade{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}
/* 去除右侧可视化，统一为单列，与其他页一致 */
@media (min-width:1024px){.hero-inner{grid-template-columns:1fr 360px}}
@media (max-width:960px){.hero-inner{padding:54px 0}}

/* 合作体系 */
.ic-collab{padding:34px 0 90px}
.ic-module{margin-bottom:36px}
.ic-head{display:flex;gap:12px;align-items:flex-start;margin:0 0 12px}
.ic-head .emoji{font-size:22px;line-height:1}
.ic-head h2{margin:0 0 6px;font-size:22px;font-weight:800;color:#0a2a4a}
.ic-head p{margin:0;color:#114066}
.cards.g3{display:grid;gap:18px;grid-template-columns:repeat(3,minmax(0,1fr))}
.c-card{position:relative;padding:16px;border:1px solid rgba(90,140,175,.65);border-radius:16px;background:linear-gradient(170deg,rgba(255,255,255,.96),rgba(242,247,252,.92));box-shadow:0 10px 24px -14px rgba(18,54,95,.22)}
.c-card h3{margin:0 0 6px;color:#0a2a4a}
.c-card p{margin:0;color:#114066;font-size:13.5px}
/* 移除占位 Logo 框样式，卡片保持简洁 */
@media (max-width:1100px){.cards.g3{grid-template-columns:1fr 1fr}}
@media (max-width:640px){.cards.g3{grid-template-columns:1fr}}

/* Logo 墙（政府/投资/高校） */
.logo-wall{margin-top:16px;display:grid;gap:14px}
.logo-card{position:relative;display:flex;align-items:center;justify-content:center;padding:8px;border:1px solid rgba(140,170,200,.40);border-radius:12px;background:linear-gradient(170deg,rgba(255,255,255,.96),rgba(242,247,252,.92));box-shadow:0 6px 16px -12px rgba(18,54,95,.18)}
.logo-card img{width:100%;height:100%;max-width:180px;max-height:72px;object-fit:contain}
.logo-wall.gov{grid-template-columns:repeat(5,minmax(0,1fr))}
.logo-wall.invest{grid-template-columns:repeat(5,minmax(0,1fr))}
.logo-wall.uni{grid-template-columns:repeat(5,minmax(0,1fr))}
@media (max-width:1200px){
  .logo-wall.gov{grid-template-columns:repeat(4,minmax(0,1fr))}
  .logo-wall.invest{grid-template-columns:repeat(5,minmax(0,1fr))}
  .logo-wall.uni{grid-template-columns:repeat(5,minmax(0,1fr))}
}
@media (max-width:900px){
  .logo-wall.gov,.logo-wall.invest,.logo-wall.uni{grid-template-columns:repeat(3,minmax(0,1fr))}
}
@media (max-width:600px){
  .logo-wall.gov,.logo-wall.invest,.logo-wall.uni{grid-template-columns:repeat(2,minmax(0,1fr))}
}
</style>
