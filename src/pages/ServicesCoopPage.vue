<template>
  <div class="coop-page">
    <!-- ① 页首 Hero -->
    <section class="coop-hero container" v-reveal>
      <div class="hero-bg" aria-hidden="true"></div>
  <h1 class="title">企业导向的技术转移与落地</h1>
  <p class="lead">面向企业真实业务场景，以“问题定义—方案比选—多方评审—PoC/中试”的标准化路径推动技术落地；以数据与专家网络缩短决策周期，提升投入产出比。</p>
      <div class="badges">
        <span class="badge" v-tilt>精准匹配｜国内外科研成果</span>
        <span class="badge" v-tilt>深度协作｜高校 × 企业 × 园区</span>
        <span class="badge" v-tilt>全球联通｜中英双向技术流通</span>
      </div>
    </section>

    <!-- ② 全球化的科研资源网络 -->
    <section class="coop-global container" v-reveal>
      <div class="sec-head">
  <h2>全球化科研资源与专家库</h2>
  <p>依托长三角重点高校与英国/欧洲科研网络，持续沉淀可对接的成果与团队画像，覆盖能源与制造、AI与智能传感、生物健康、新材料等方向，面向企业场景进行工程化筛选与组合。</p>
      </div>
  <div class="world-bg" aria-hidden="true"></div>
      <div class="g3">
        <div class="g3-card" v-tilt>
          <h3>资源来源</h3>
          <ul>
            <li>长三角核心高校实验室、国家重点实验室</li>
            <li>英国顶尖科研院所与大学团队</li>
          </ul>
        </div>
        <div class="g3-card" v-tilt>
          <h3>技术领域</h3>
          <ul>
            <li>能源、先进制造、新材料</li>
            <li>AI与智能传感、生物医药</li>
          </ul>
        </div>
        <div class="g3-card" v-tilt>
          <h3>协作模式</h3>
          <ul>
            <li>中国高校 × 海外院校联合研发</li>
            <li>成果共研、标准共研、跨境落地</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- ③ 企业驱动的合作逻辑 -->
    <section class="coop-enterprise container" v-reveal>
      <div class="sec-head">
  <h2>企业驱动的合作逻辑</h2>
  <p>从业务痛点出发，形成需求与技术画像；基于证据的评审机制与明确的里程碑计划，控制节奏与风险，确保每一步都可验证、可交付。</p>
      </div>
      <div class="timeline">
        <div class="step">
          <div class="dot"></div>
          <h4>现场调研</h4>
          <p>形成“技术痛点 + 发展目标”画像。</p>
        </div>
        <div class="step">
          <div class="dot"></div>
          <h4>精准匹配</h4>
          <p>从数据库筛选最匹配科研团队。</p>
        </div>
        <div class="step">
          <div class="dot"></div>
          <h4>评审论证</h4>
          <p>组织多方评审、需求澄清与场景论证。</p>
        </div>
        <div class="step">
          <div class="dot"></div>
          <h4>PoC / 中试</h4>
          <p>制定 PoC 与中试计划，联动园区及资金支持。</p>
        </div>
      </div>
      
    </section>

    <!-- ④ 高校协同的转化路径 -->
    <section class="coop-university container" v-reveal>
      <div class="sec-head">
  <h2>高校协同的转化路径</h2>
  <p>围绕校内流程、IP与收益机制，提供从专利布局、确权与合规到方案设计与落地的端到端支持。</p>
      </div>
      <div class="vflow">
        <div class="vstep card" v-tilt>
          <h4>源头介入</h4>
          <p>在立项或成果成熟阶段介入，进行专利布局与商业评估。</p>
        </div>
        <div class="vstep card" v-tilt>
          <h4>流程赋能</h4>
          <p>简化校内审批流程，提供确权、收益分配与转化方案设计支持。</p>
        </div>
        <div class="vstep card" v-tilt>
          <h4>场景导入</h4>
          <p>协助成果进入企业真实生产、验证、试验场景。</p>
        </div>
        <div class="vstep card" v-tilt>
          <h4>国际合作延展</h4>
          <p>引入海外高校团队参与实验设计、算法优化与工程验证，形成跨国联合创新机制。</p>
        </div>
      </div>
      <div class="label-intl">中英联合研发</div>
    </section>

    <!-- ⑤ 国际高校合作机制 -->
    <section class="coop-intl container" v-reveal>
      <div class="sec-head">
  <h2>国际高校合作机制</h2>
  <p>与英国及欧洲多所科研院校建立长期合作通道，重点在联合研发、实验与标准共建、跨境验证与本地化量产等环节形成稳定机制。</p>
      </div>
      
      <div class="coop-list g2">
        <div class="g2-card" v-tilt>
          <h3>合作方向</h3>
          <ul>
            <li>共同设立中英科研成果转化示范项目</li>
            <li>在人工智能、能源与制造领域开展实验室共建</li>
            <li>“双导师”机制：科研专家 + 产业经理人</li>
            <li>支持海外成果在中国园区验证与产业化</li>
          </ul>
        </div>
        <div class="g2-card" v-tilt>
          <h3>示例院校</h3>
          <ul>
            <li>伦敦大学学院（UCL）</li>
            <li>帝国理工学院（Imperial College London）</li>
            <li>以及其他英国/欧洲顶尖院校与研究机构</li>
          </ul>
        </div>
      </div>

      <!-- 13所院校 Logo 墙（将图片放入 public/logos/ 下） -->
      <div class="logo-wall">
        <div class="logo-card" v-for="(l, idx) in logos" :key="idx">
          <img :src="`/logos/${l.name}.${l.ext || 'png'}`" :alt="l.alt" loading="lazy" @error="onLogoError" />
        </div>
      </div>
    </section>

    <!-- ⑥ 园区场景与企业承接 -->
    <section class="coop-park container" v-reveal>
      <div class="sec-head">
  <h2>园区场景与企业承接</h2>
  <p>与政府园区共建承接通道，提供中试能力、验证场景与政策工具包，降低试点与小规模量产的综合成本。</p>
      </div>
      <div class="g3">
        <div class="park-card" v-tilt>
          <h4>转化中心</h4>
          <p>共建转化中心与成果展示厅。</p>
        </div>
        <div class="park-card" v-tilt>
          <h4>中试平台</h4>
          <p>提供落地评估、设备对接、试验资助。</p>
        </div>
        <div class="park-card" v-tilt>
          <h4>评估体系</h4>
          <p>建立数据回流体系，为政策优化提供依据。</p>
        </div>
      </div>

      <!-- 政府 Logo 墙（1-10 排序） -->
      <div class="logo-wall gov">
        <div class="logo-card" v-for="(l, idx) in govLogos" :key="idx">
          <img :src="`/gov-logos/${l.name}.${l.ext || 'png'}`" :alt="l.alt" loading="lazy" @error="onGovLogoError" />
        </div>
      </div>
    </section>

    <!-- ⑦ 双库智能撮合平台 -->
    <section class="coop-engine container" v-reveal>
      <div class="sec-head">
  <h2>双库智能撮合平台</h2>
  <p>基于“科技人才库 × 产业企业库”的双库数据与标签体系，实现画像匹配、过程跟踪与案例沉淀，让可复用经验持续提升匹配效率。</p>
      </div>
      <div class="engine">
        <div class="pool left" aria-hidden="true">科技人才库</div>
        <div class="link left" aria-hidden="true"></div>
        <div class="core" aria-hidden="true">智能撮合引擎</div>
        <div class="link right" aria-hidden="true"></div>
        <div class="pool right" aria-hidden="true">产业企业库</div>
      </div>
      <ul class="engine-points">
        <li>技术精准匹配（领域 / TRL / 市场规模 / 专利状态）</li>
        <li>动态跟踪（从需求到落地全过程）</li>
        <li>成果再利用（形成行业案例库与持续优化）</li>
      </ul>
    </section>

    <!-- ⑧ 合规与知识产权保障 -->
    <section class="coop-compliance container" v-reveal>
      <div class="sec-head">
  <h2>合规与知识产权保障</h2>
  <p>遵循中英双地法规，围绕 IP、数据与人员/样品跨境开展合规审查与分级管理，提供模板化协议与操作规范。</p>
      </div>
      <div class="g4">
        <div class="c-card" v-tilt>
          <h4>知识产权</h4>
          <p>专利确权、许可与转让，标准化模板保障权益。</p>
        </div>
        <div class="c-card" v-tilt>
          <h4>数据安全</h4>
          <p>跨境数据与算法模型的分级管理。</p>
        </div>
        <div class="c-card" v-tilt>
          <h4>法务合规</h4>
          <p>法务审查、风险识别与合规流转。</p>
        </div>
        <div class="c-card" v-tilt>
          <h4>联合开发</h4>
          <p>联合开发/授权/转让协议模板与流程规范。</p>
        </div>
      </div>
    </section>

    <!-- ⑨ 我们的目标 -->
    <section class="coop-goal container" v-reveal>
      <div class="goal-wrap">
  <h2>以结果为导向的技术落地</h2>
  <p>以清晰的里程碑与可验证指标为准绳，让创新更快转化为可度量的业务价值。</p>
        <ul>
          <li>建立中国与海外高校技术双循环机制</li>
          <li>提升科研成果的国际应用价值</li>
          <li>让企业在创新驱动中获得持续竞争力</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const logos = [
  ...Array.from({ length: 11 }, (_, i) => ({ name: String(i + 1), ext: 'png', alt: `合作院校 Logo ${i + 1}` })),
  { name: '13', ext: 'png', alt: '合作院校 Logo 12' }
]

const placeholder = `data:image/svg+xml;utf8,
<svg xmlns='http://www.w3.org/2000/svg' width='320' height='120' viewBox='0 0 320 120'>
  <defs>
    <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
      <stop offset='0%' stop-color='%23ffffff'/>
      <stop offset='100%' stop-color='%23f5faff'/>
    </linearGradient>
  </defs>
  <rect x='0.5' y='0.5' width='319' height='119' rx='14' ry='14' fill='url(%23g)' stroke='%23c9d9eb'/>
  <g opacity='0.4'>
    <path d='M10 90 C60 70 120 100 170 84 C210 72 260 88 310 78' stroke='%23cfe0f4' stroke-width='1' fill='none'/>
  </g>
  <text x='50%' y='50%' font-size='22' font-weight='700' text-anchor='middle' dominant-baseline='middle' fill='%2397adc9'>LOGO</text>
  <text x='50%' y='68%' font-size='11' text-anchor='middle' fill='%2397adc9'>放置于 public/logos</text>
  </svg>`

function onLogoError(e: Event) {
  const el = e.target as HTMLImageElement
  if (!el) return
  const url = new URL(el.src)
  const isPng = url.pathname.endsWith('.png')
  const isJpg = url.pathname.endsWith('.jpg') || url.pathname.endsWith('.jpeg')
  if (isPng) {
    el.src = url.pathname.replace(/\.png$/i, '.jpg')
    return
  }
  if (isJpg) {
    // 国际高校合作机制：不再显示占位图，直接移除卡片
    const card = el.closest('.logo-card') as HTMLElement | null
    if (card) card.remove()
    return
  }
  const card = el.closest('.logo-card') as HTMLElement | null
  if (card) card.remove()
}

// 政府 Logo 1..10
const govLogos = Array.from({ length: 10 }, (_, i) => ({
  name: String(i + 1),
  ext: 'png',
  alt: `政府 Logo ${i + 1}`
}))

function onGovLogoError(e: Event) {
  const el = e.target as HTMLImageElement
  if (!el) return
  const url = new URL(el.src)
  const isPng = url.pathname.endsWith('.png')
  const isJpg = url.pathname.endsWith('.jpg') || url.pathname.endsWith('.jpeg')
  if (isPng) {
    el.src = url.pathname.replace(/\.png$/i, '.jpg')
    return
  }
  if (isJpg) {
    if (el.src !== placeholder) el.src = placeholder
    return
  }
  if (el.src !== placeholder) el.src = placeholder
}
</script>

<style scoped>
.coop-page{position:relative;padding-top:40px}
/* ① Hero */
.coop-hero{position:relative;padding:86px 0 56px;text-align:center;overflow:hidden}
.coop-hero .hero-bg{position:absolute;inset:-20%;background:
  radial-gradient(900px 520px at 50% 10%,rgba(56,140,225,.30),rgba(56,140,225,0) 70%),
  linear-gradient(180deg,rgba(224,236,248,.85) 0%,rgba(214,230,244,.70) 55%,rgba(206,226,242,.55) 100%);
  filter:saturate(112%);opacity:.96}
.coop-hero .hero-grid{display:none}
.coop-hero .title{position:relative;margin:0 0 16px;font-size:clamp(34px,5vw,52px);font-weight:800;letter-spacing:.4px;background:linear-gradient(95deg,#123153 0%,#195894 25%,#2373c8 48%,#2e7dff 65%,#55beff 82%,#9de9ff 100%);-webkit-background-clip:text;background-clip:text;color:transparent;filter:drop-shadow(0 6px 18px rgba(60,140,220,.25)) drop-shadow(0 2px 4px rgba(0,0,0,.22))}
.coop-hero .lead{position:relative;margin:0 auto 16px;max-width:960px;color:#34526a;opacity:.95;line-height:1.65}
.badges{position:relative;display:flex;gap:12px;flex-wrap:wrap;justify-content:center;margin-top:8px}
.badge{padding:10px 14px;border-radius:999px;border:1px solid rgba(140,170,200,.45);background:linear-gradient(160deg,rgba(255,255,255,.85),rgba(255,255,255,.65));color:#1a4b8f;font-size:12px;backdrop-filter:blur(8px) saturate(150%)}

/* ② 全球化网络 */
.coop-global{position:relative;padding:24px 0 56px}
.sec-head{margin:0 auto 16px;max-width:900px}
.sec-head h2{margin:0 0 6px;font-size:26px;font-weight:800;letter-spacing:.4px;background:linear-gradient(90deg,#16406d,#2e7dff 55%,#6ec4ff);-webkit-background-clip:text;background-clip:text;color:transparent}
.sec-head p{margin:0;color:#34526a}
.world-bg{position:absolute;inset:0;background:
  radial-gradient(680px 300px at 50% 30%,rgba(56,140,225,.20),rgba(56,140,225,0) 70%),
  url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="600" viewBox="0 0 1200 600"><path d="M0,300 C200,280 400,330 600,300 C800,270 1000,320 1200,300" stroke="%23A5C7F6" stroke-width="1" fill="none" opacity="0.35"/></svg>') center/cover no-repeat;
  opacity:.55;pointer-events:none}
.world-bg::before,.world-bg::after{content:"";position:absolute;inset:0;pointer-events:none}
.world-bg::before{background:
  radial-gradient(6px 6px at 30% 52%,rgba(146,194,255,.9),rgba(146,194,255,0) 60%),
  radial-gradient(6px 6px at 68% 48%,rgba(146,194,255,.9),rgba(146,194,255,0) 60%),
  radial-gradient(6px 6px at 50% 42%,rgba(146,194,255,.9),rgba(146,194,255,0) 60%);
  animation:blink 2.4s ease-in-out infinite}
@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}
.world-bg::after{background:
  linear-gradient(90deg,rgba(46,125,255,.0),rgba(146,194,255,.45),rgba(46,125,255,0)) no-repeat;
  width:40%;height:2px;left:30%;top:50%;filter:blur(.2px);animation:flowline 3.8s linear infinite}
@keyframes flowline{0%{transform:translateX(-18px)}100%{transform:translateX(18px)}}
.g3{display:grid;gap:18px;grid-template-columns:repeat(3,minmax(0,1fr))}
.g3-card{position:relative;padding:16px;border:1px solid rgba(140,170,200,.40);border-radius:16px;background:#fff;box-shadow:0 8px 18px -12px rgba(18,54,95,.18)}
.g3-card h3{margin:0 0 6px;color:#0a2a4a}
.g3-card ul{margin:0;padding-left:18px;color:#114066}
@media (max-width:960px){.g3{grid-template-columns:1fr}}

/* ③ 企业驱动 */
.coop-enterprise{padding:20px 0 56px}
.timeline{position:relative;display:grid;gap:14px;grid-template-columns:repeat(4,minmax(0,1fr))}
.step{position:relative;padding:16px 14px;border:1px solid rgba(140,170,200,.40);border-radius:16px;background:#fff;box-shadow:0 8px 18px -12px rgba(18,54,95,.18)}
.step .dot{position:absolute;left:12px;top:-8px;width:12px;height:12px;border-radius:999px;background:linear-gradient(180deg,#2e7dff,#9bd7ff);box-shadow:0 8px 18px -10px rgba(46,125,255,.45)}
@media (max-width:960px){.timeline{grid-template-columns:1fr}}

/* ④ 高校协同 */
.coop-university{padding:20px 0 56px}
.vflow{display:grid;gap:14px;grid-template-columns:repeat(4,minmax(0,1fr))}
.vstep{min-height:120px}
.card{padding:16px;border:1px solid rgba(90,140,175,.65);border-radius:16px;background:linear-gradient(170deg,rgba(255,255,255,.96),rgba(242,247,252,.92));box-shadow:0 10px 28px -14px rgba(18,54,95,.22)}
.label-intl{margin-top:10px;display:inline-block;padding:6px 10px;border-radius:999px;background:#e9f2ff;color:#1a4b8f;border:1px solid #c7defb;font-size:12px}
@media (max-width:960px){.vflow{grid-template-columns:1fr}}

/* ⑤ 国际合作 */
.coop-intl{padding:20px 0 36px}
.coop-intl .coop-list{margin-top:10px;margin-bottom:0}
.coop-intl .g2-card ul{margin:0;padding-left:18px}
.coop-list.g2{display:grid;gap:18px;grid-template-columns:repeat(2,minmax(0,1fr));margin-top:12px}
.g2-card{position:relative;padding:16px;border:1px solid rgba(140,170,200,.40);border-radius:16px;background:#fff;box-shadow:0 8px 18px -12px rgba(18,54,95,.18)}
@media (max-width:900px){.coop-list.g2{grid-template-columns:1fr}}

/* 国际合作 Logo 墙 */
.logo-wall{margin-top:16px;display:grid;gap:14px;grid-template-columns:repeat(6,minmax(0,1fr))}
.logo-card{position:relative;display:flex;align-items:center;justify-content:center;padding:8px;border:1px solid rgba(140,170,200,.40);border-radius:14px;background:linear-gradient(170deg,rgba(255,255,255,.96),rgba(242,247,252,.92));box-shadow:0 8px 18px -12px rgba(18,54,95,.18);transition:transform .2s ease, box-shadow .2s ease}
.logo-card:hover{transform:translateY(-2px);box-shadow:0 14px 28px -14px rgba(18,54,95,.28)}
.logo-card img{width:100%;height:100%;max-width:180px;max-height:72px;object-fit:contain;opacity:1;transition:opacity .2s ease}
@media (max-width:1200px){.logo-wall{grid-template-columns:repeat(5,minmax(0,1fr))}}
@media (max-width:900px){.logo-wall{grid-template-columns:repeat(3,minmax(0,1fr))}}
@media (max-width:600px){.logo-wall{grid-template-columns:repeat(2,minmax(0,1fr))}}

/* 政府 Logo 墙：桌面 5 列 */
.logo-wall.gov{grid-template-columns:repeat(5,minmax(0,1fr))}
@media (max-width:1200px){.logo-wall.gov{grid-template-columns:repeat(4,minmax(0,1fr))}}
@media (max-width:900px){.logo-wall.gov{grid-template-columns:repeat(3,minmax(0,1fr))}}
@media (max-width:600px){.logo-wall.gov{grid-template-columns:repeat(2,minmax(0,1fr))}}

/* ⑥ 园区场景 */
.coop-park{padding:20px 0 56px}
.park-card{position:relative;padding:16px;border:1px solid rgba(140,170,200,.40);border-radius:16px;background:#fff;box-shadow:0 8px 18px -12px rgba(18,54,95,.18)}

/* ⑦ 撮合引擎 */
.coop-engine{padding:20px 0 56px}
.engine{position:relative;display:grid;grid-template-columns:1fr 1fr 1fr;align-items:center;gap:12px;margin:8px 0 10px}
.engine .pool{padding:16px;border-radius:14px;border:1px dashed rgba(140,170,200,.55);text-align:center;color:#1b3d66;background:linear-gradient(180deg,#f7fbff,#ffffff)}
.engine .core{padding:30px 16px;border-radius:16px;background:radial-gradient(200px 80px at 50% 50%,rgba(46,125,255,.20),rgba(46,125,255,0) 70%),linear-gradient(180deg,#0f2747 0%,#12416f 42%,#1a62b0 90%);color:#e9f1ff;text-align:center;font-weight:800;letter-spacing:.3px;box-shadow:0 12px 28px -12px rgba(18,54,95,.35);position:relative;z-index:1}
.engine .link{height:2px;background:linear-gradient(90deg,rgba(46,125,255,0),rgba(146,194,255,0.9),rgba(46,125,255,0));position:relative}
.engine .link::after{content:"";position:absolute;top:-3px;left:10%;width:14px;height:8px;border-radius:999px;background:rgba(146,194,255,0.95);filter:blur(.2px);animation:runner 2.4s linear infinite}
.engine .link.left{grid-column:1/3}
.engine .link.right{grid-column:2/4}
@keyframes runner{0%{left:10%}100%{left:88%}}
.engine-points{margin:0;padding-left:18px;color:#114066}
@media (max-width:900px){.engine{grid-template-columns:1fr}}

/* ⑧ 合规 */
.coop-compliance{padding:20px 0 56px}
.g4{display:grid;gap:18px;grid-template-columns:repeat(4,minmax(0,1fr))}
.c-card{position:relative;padding:16px;border:1px solid rgba(140,170,200,.40);border-radius:16px;background:#fff;box-shadow:0 8px 18px -12px rgba(18,54,95,.18)}
.c-card h4{margin:0 0 6px;color:#0a2a4a}
.c-card p{margin:0;color:#114066;font-size:13.5px}
@media (max-width:960px){.g4{grid-template-columns:repeat(2,minmax(0,1fr))}}

/* ⑨ 目标 */
.coop-goal{padding:28px 0 80px}
.goal-wrap{padding:22px;border:1px solid rgba(90,140,175,.65);border-radius:16px;background:linear-gradient(170deg,rgba(255,255,255,.96),rgba(242,247,252,.92));box-shadow:0 10px 28px -14px rgba(18,54,95,.22);text-align:center}
.goal-wrap h2{margin:0 0 8px;font-size:24px;font-weight:800;letter-spacing:.3px;color:#0b2d57}
.goal-wrap p{margin:0 auto 8px;max-width:880px;color:#114066}
.goal-wrap ul{margin:0 auto;max-width:640px;text-align:left;padding-left:18px;color:#114066}
</style>
