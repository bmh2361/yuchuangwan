<template>
  <div class="fund-page">
    <!-- ① 页首区块：基金与投研中心简介 -->
    <section class="fund-hero container">
      <div class="hero-bg" aria-hidden="true"></div>
      <div class="hero-ink" aria-hidden="true"></div>
      <h1 class="title">基金与投研中心</h1>
      <p class="lead">连接高校科研、产业需求与资本力量，
        以基金投资与系统投研为引擎，推动科技成果实现“从实验室到产业”的价值转化。</p>
      <p class="lead">我们聚焦硬科技与高成长领域，以科学方法和产业洞察驱动投资决策，
        助力科研成果落地为生产力。</p>

      <div class="positioning">
        <span class="pill">核心定位：全链条技术转移 · 早期股权投资 · 场景孵化</span>
      </div>

      <div class="hero-kv">
        <div class="kv"><span class="lab">资金规模</span><span class="val">3500 万人民币</span></div>
        <div class="kv"><span class="lab">单项目投资额</span><span class="val">100–200 万人民币</span></div>
        <div class="kv"><span class="lab">投资阶段</span><span class="val">天使后期 / Pre‑A</span></div>
        <div class="kv"><span class="lab">投资领域</span><span class="val">能源与先进制造｜医疗与新材料｜AI与智能传感｜科研成果转化</span></div>
      </div>

      <div class="hero-stats">
        <div class="stat" v-tilt>
          <div class="num"><span v-countup="3500">0</span> 万+</div>
          <div class="txt">资金池规模</div>
        </div>
        <div class="stat" v-tilt>
          <div class="num"><span v-countup="100">0</span>–<span v-countup="200">0</span> 万</div>
          <div class="txt">单笔投资</div>
        </div>
        <div class="stat" v-tilt>
          <div class="num"><span v-countup="20">0</span></div>
          <div class="txt">投资领域数</div>
        </div>
        <div class="stat" v-tilt>
          <div class="num">多所</div>
          <div class="txt">合作高校数</div>
        </div>
      </div>
    </section>

    <!-- ② 投资理念 / Investment Thesis -->
    <section class="thesis container" v-reveal>
      <div class="sec-head">
        <h2>投资理念</h2>
        <p>我们相信科技创新是产业升级的根本驱动力。育创湾以“需求驱动、科学决策、长期陪伴”为投资核心原则，
          以真实场景与产业痛点为起点，寻找具备可验证成果和清晰商业化路径的项目。</p>
      </div>
      <div class="thesis-grid">
        <div class="t-card" v-tilt>
          <div class="icon" aria-hidden="true">🔎</div>
          <h3>需求导向</h3>
          <p>以企业痛点和社会需求为出发点。</p>
        </div>
        <div class="t-card" v-tilt>
          <div class="icon" aria-hidden="true">🧬</div>
          <h3>技术壁垒</h3>
          <p>具备原创技术与知识产权优势。</p>
        </div>
        <div class="t-card" v-tilt>
          <div class="icon" aria-hidden="true">✅</div>
          <h3>验证优先</h3>
          <p>完成实验验证或 PoC 阶段成果。</p>
        </div>
        <div class="t-card" v-tilt>
          <div class="icon" aria-hidden="true">🛡️</div>
          <h3>合规与风控</h3>
          <p>重视科研合规、数据安全与技术伦理。</p>
        </div>
        <div class="t-card" v-tilt>
          <div class="icon" aria-hidden="true">🤝</div>
          <h3>产业协同</h3>
          <p>依托政府园区与产业基金共建。</p>
        </div>
        <div class="t-card" v-tilt>
          <div class="icon" aria-hidden="true">🌱</div>
          <h3>长期陪伴</h3>
          <p>投后持续赋能，助力从实验到市场的全程成长。</p>
        </div>
      </div>

      <!-- 投资合作企业（1-16 排序） -->
      <div class="logo-wall invest">
        <div class="logo-card" v-for="(l, idx) in investLogos" :key="idx">
          <img :src="`/invest-logos/${l.name}.${l.ext || 'png'}`" :alt="l.alt" loading="lazy" @error="onInvestLogoError" />
        </div>
      </div>
    </section>

    <!-- ③ 基金画像 / Fund Profile -->
    <section class="profile container" v-reveal>
      <div class="sec-head">
        <h2>基金画像</h2>
        <p>基金不仅提供资金，更为项目匹配产业场景、技术顾问与后续融资资源。</p>
      </div>
      <div class="profile-wrap">
        <div class="table-card" v-tilt>
          <dl>
            <div class="row"><dt>基金名称</dt><dd>育创湾科技成果转化基金</dd></div>
            <div class="row"><dt>资金规模</dt><dd>约 3500 万人民币</dd></div>
            <div class="row"><dt>单笔投资额</dt><dd>100–200 万人民币</dd></div>
            <div class="row"><dt>投资阶段</dt><dd>天使后期 / Pre‑A</dd></div>
            <div class="row"><dt>投资重点</dt><dd>硬科技 / 科研成果转化 / AI与智能传感 / 医疗与材料</dd></div>
            <div class="row"><dt>地域覆盖</dt><dd>中国长三角 × 英国高校与产业网络</dd></div>
            <div class="row"><dt>投资方式</dt><dd>股权投资 + 场景孵化 + 战略联合</dd></div>
            <div class="row"><dt>合作生态</dt><dd>政府园区 / 高校实验室 / 创投机构 / 企业研发中心</dd></div>
          </dl>
        </div>
        <div class="flow-card" v-tilt>
          <h3>转化流程示意</h3>
          <ol class="flow-steps">
            <li><span class="b">项目</span><span class="arr">→</span></li>
            <li><span class="b">评估</span><span class="arr">→</span></li>
            <li><span class="b">投资</span><span class="arr">→</span></li>
            <li><span class="b">孵化</span><span class="arr">→</span></li>
            <li><span class="b">退出</span></li>
          </ol>
          <p class="hint">结合产业场景，形成“项目→评估→投资→孵化→退出”的闭环。</p>
        </div>
      </div>
    </section>

    <!-- ④ 投资流程 / Investment Process -->
    <section class="process container" v-reveal>
      <div class="sec-head">
        <h2>投资流程</h2>
        <p>以“科研成果到产业化”的逻辑重构投资流程，服务与资本双轮驱动，形成成长闭环。</p>
      </div>
      <div class="timeline">
        <div class="step" v-for="s in steps" :key="s.key" v-tilt>
          <div class="s-icon" v-html="s.icon" aria-hidden="true" />
          <div class="s-title">{{ s.title }}</div>
          <div class="s-desc">{{ s.desc }}</div>
        </div>
      </div>
    </section>

    <!-- ⑤ 投研体系 / Investment Research -->
    <section class="research container" v-reveal>
      <div class="sec-head">
        <h2>投研体系</h2>
        <p>结合技术分析与产业洞察，对科研成果、专利分布、产业链趋势及政策导向进行系统研究，为每一次投资提供科学依据。</p>
      </div>
      <div class="research-grid">
        <div class="col card" v-tilt>
          <h3>研究主题</h3>
          <ul>
            <li>能源与先进制造</li>
            <li>生命健康与新材料</li>
            <li>AI与智能传感</li>
          </ul>
        </div>
        <div class="col card" v-tilt>
          <h3>研究方法</h3>
          <ul>
            <li>专利地图分析</li>
            <li>技术成熟度（TRL）评估</li>
            <li>市场规模测算</li>
            <li>产业链拆解</li>
            <li>政策文本与标准研读</li>
          </ul>
        </div>
        <div class="col card" v-tilt>
          <h3>数据来源</h3>
          <ul>
            <li>高校实验室与科研平台</li>
            <li>政府园区与产业基金</li>
            <li>公开数据库与行业报告</li>
            <li>专家访谈与实地调研</li>
          </ul>
        </div>
        <aside class="report card" v-tilt>
          <h3>成果输出</h3>
          <ul class="bullets">
            <li>季度行业观察报告</li>
            <li>技术速览</li>
            <li>投资机会白皮书</li>
            <li>成果转化案例集</li>
          </ul>
          <button class="download">下载白皮书（占位）</button>
        </aside>
      </div>
    </section>

    

    <!-- ⑦ 双库系统 / Dual-Database Matching -->
    <section class="dualdb container" v-reveal>
      <div class="sec-head">
        <h2>双库系统 · 精准匹配</h2>
        <p>汇聚科技人才库与产业企业库两大核心数据库，实现从“找技术”到“配场景”的智能撮合。</p>
      </div>
      <div class="match-scene">
        <div class="ring left" v-tilt>
          <div class="halo"></div>
          <div class="ring-core">
            <div class="title">人才库</div>
            <div class="chips">
              <span>技术领域</span><span>专利状态</span><span>TRL</span>
            </div>
          </div>
        </div>

        <div class="engine-3d">
          <div class="pulse"></div>
          <div class="engine-core">匹配引擎</div>
          <div class="orbit orbit-a"></div>
          <div class="orbit orbit-b"></div>
          <div class="particles">
            <span style="--x:10%;--y:20%;--d:6s"></span>
            <span style="--x:80%;--y:15%;--d:7.5s"></span>
            <span style="--x:20%;--y:80%;--d:8.2s"></span>
            <span style="--x:70%;--y:70%;--d:9s"></span>
          </div>
        </div>

        <div class="ring right" v-tilt>
          <div class="halo"></div>
          <div class="ring-core">
            <div class="title">企业库</div>
            <div class="chips">
              <span>市场规模</span><span>研发阶段</span><span>行业对标</span>
            </div>
          </div>
        </div>
      </div>
      <p class="tiny">系统实现动态更新与实时推荐，让科研成果快速找到落地空间。</p>
    </section>

    <!-- ⑧ 投后赋能与生态共建 -->
    <section class="ecosys container" v-reveal>
      <div class="sec-head">
        <h2>投后赋能与生态共建</h2>
        <p>我们以“服务 + 基金”的双轮模式，形成科技转化的正向循环：技术 → 转化 → 产业化 → 集群 → 再启需求。</p>
      </div>
      <div class="loop">
        <div class="loop-item">产业资源对接</div>
        <div class="arrow">→</div>
        <div class="loop-item">资本加速</div>
        <div class="arrow">→</div>
        <div class="loop-item">品牌与传播</div>
        <div class="arrow">→</div>
        <div class="loop-item">国际化连接</div>
        <div class="arrow">→</div>
        <div class="loop-item emph">正向循环</div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// 投资流程步骤（图标为内联 SVG）
interface Step { key: string; title: string; desc: string; icon: string }
const steps: Step[] = [
  { key:'clue', title:'项目线索收集', desc:'来源于高校实验室、园区与企业需求。', icon:`<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>` },
  { key:'portrait', title:'需求与技术画像', desc:'建立“技术痛点 + 发展目标”档案。', icon:`<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M6 22c0-4 4-6 6-6s6 2 6 6"/></svg>` },
  { key:'dd', title:'尽调与评估', desc:'专利检索、TRL评估、市场可行性分析。', icon:`<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3h18v14H3z"/><path d="M7 21h10"/></svg>` },
  { key:'poc', title:'概念验证 PoC', desc:'提供资金与专家资源，验证可行性。', icon:`<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 2 7l10 5 10-5-10-5Z"/><path d="m2 17 10 5 10-5"/></svg>` },
  { key:'invest', title:'投资与落地', desc:'签约投资并对接产业场景、试产基地。', icon:`<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c4-1 8-5 8-10V5l-8-3-8 3v7c0 5 4 9 8 10Z"/><path d="M9 12h6"/></svg>` },
  { key:'post', title:'投后赋能与退出', desc:'继续陪伴成长，协助二轮融资或并购退出。', icon:`<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h18"/><path d="m15 5 7 7-7 7"/></svg>` },
]

// 投资合作企业 Logo（1..16）
const investLogos = Array.from({ length: 16 }, (_, i) => ({
  name: String(i + 1),
  ext: 'png',
  alt: `投资合作企业 Logo ${i + 1}`
}))

const placeholder = `data:image/svg+xml;utf8,
<svg xmlns='http://www.w3.org/2000/svg' width='320' height='120' viewBox='0 0 320 120'>
  <defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0%' stop-color='%23ffffff'/><stop offset='100%' stop-color='%23f5faff'/></linearGradient></defs>
  <rect x='0.5' y='0.5' width='319' height='119' rx='14' fill='url(%23g)' stroke='%23c9d9eb'/>
  <text x='50%' y='52%' fill='%236682a3' font-size='18' font-weight='700' text-anchor='middle' dominant-baseline='middle'>INVEST PARTNER</text>
  <text x='50%' y='72%' fill='%238ea4bf' font-size='11' text-anchor='middle' dominant-baseline='middle'>放置于 public/invest-logos</text>
</svg>`

function onInvestLogoError(e: Event) {
  const el = e.target as HTMLImageElement
  if (!el) return
  const url = new URL(el.src)
  const isPng = url.pathname.endsWith('.png')
  const isJpg = url.pathname.endsWith('.jpg') || url.pathname.endsWith('.jpeg')
  if (isPng) { el.src = url.pathname.replace(/\.png$/i, '.jpg'); return }
  if (isJpg) { if (el.src !== placeholder) el.src = placeholder; return }
  if (el.src !== placeholder) el.src = placeholder
}
</script>

<style scoped>
.fund-page{position:relative;padding-top:40px}
/* ① 页首区块 */
.fund-hero{position:relative;padding:90px 0 70px;text-align:center;overflow:hidden}
.fund-hero .hero-bg{position:absolute;inset:-20%;background:
  radial-gradient(1000px 520px at 50% -20%,rgba(56,140,225,.38),rgba(56,140,225,0) 70%),
  linear-gradient(180deg,#0f2747 0%,#12416f 40%,#1a62b0 75%,#f4f8ff 130%);
  filter:saturate(112%);opacity:.96}
.fund-hero .hero-ink{position:absolute;inset:0;background:
  repeating-linear-gradient(90deg,rgba(255,255,255,.05) 0 1px,transparent 1px 60px),
  repeating-linear-gradient(0deg,rgba(255,255,255,.045) 0 1px,transparent 1px 60px);
  mask:linear-gradient(180deg,rgba(0,0,0,.0) 0%,rgba(0,0,0,.50) 55%,rgba(0,0,0,0) 100%);
  animation:heroGrid 36s linear infinite;opacity:.26}
@keyframes heroGrid{0%{transform:translateY(0)}100%{transform:translateY(-60px)}}
.fund-hero .title{position:relative;margin:0 0 18px;font-size:clamp(36px,5.2vw,54px);font-weight:800;letter-spacing:.6px;background:linear-gradient(95deg,#a9c4ff 0%,#d6e7ff 55%,#ffffff 100%);-webkit-background-clip:text;color:transparent;filter:drop-shadow(0 8px 28px rgba(0,0,0,.35))}
.fund-hero .lead{position:relative;margin:0 auto 10px;max-width:980px;color:#d6e8ff;opacity:.92;line-height:1.65}
.positioning{position:relative;margin:18px auto 20px}
.pill{display:inline-block;padding:10px 14px;border:1px solid rgba(180,210,255,.5);border-radius:999px;background:linear-gradient(160deg,rgba(255,255,255,.10),rgba(255,255,255,.03));color:#e6f0ff;font-size:13px;letter-spacing:.3px;backdrop-filter:blur(8px) saturate(150%)}
.hero-kv{position:relative;margin:22px auto 0;display:grid;gap:14px;grid-template-columns:repeat(2,minmax(0,1fr));max-width:980px}
.hero-kv .kv{display:flex;gap:10px;align-items:center;justify-content:center;padding:10px 12px;border:1px solid rgba(160,200,255,.45);border-radius:14px;background:linear-gradient(170deg,rgba(255,255,255,.10),rgba(255,255,255,.04));color:#d3e6ff;min-height:48px}
.hero-kv .lab{opacity:.85;font-size:13px}
.hero-kv .val{font-weight:600;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;max-width:100%}
.hero-stats{position:relative;margin:26px auto 0;display:grid;gap:18px;grid-template-columns:repeat(4,minmax(0,1fr));max-width:980px}
.hero-stats .stat{--bd:rgba(160,200,250,.55);padding:20px 16px;border:1px solid var(--bd);border-radius:18px;background:linear-gradient(170deg,rgba(255,255,255,.10),rgba(255,255,255,.04));backdrop-filter:blur(8px) saturate(160%);box-shadow:0 10px 34px -14px rgba(0,0,0,.45);transition:transform .35s ease,border-color .35s ease}
.hero-stats .stat:hover{transform:translateY(-6px);border-color:rgba(190,220,255,.85)}
.hero-stats .num{font-size:26px;font-weight:800;color:#ffffff}
.hero-stats .txt{font-size:12px;letter-spacing:.6px;color:#c6dbff;text-transform:uppercase}
@media (max-width:900px){.hero-kv{grid-template-columns:1fr}.hero-stats{grid-template-columns:repeat(2,minmax(0,1fr))}}

/* 通用区块头 */
.sec-head{margin:0 auto 22px;max-width:900px}
.sec-head h2{margin:0 0 8px;font-size:28px;font-weight:800;letter-spacing:.4px;background:linear-gradient(90deg,#16406d,#2e7dff 55%,#6ec4ff);-webkit-background-clip:text;color:transparent}
.sec-head p{margin:0;color:#34526a}

/* ② 投资理念 */
.thesis{padding:60px 0 80px;background:
  radial-gradient(800px 320px at 20% 0%,rgba(200,220,245,.45),rgba(200,220,245,0) 70%),
  linear-gradient(180deg,#f2f7fc 0%,#eef5fb 100%)}
.thesis-grid{display:grid;gap:22px;grid-template-columns:repeat(3,minmax(0,1fr));align-items:stretch}
.t-card{position:relative;padding:22px 18px;border:1px solid rgba(90,140,175,.65);border-radius:18px;background:linear-gradient(170deg,rgba(255,255,255,.96),rgba(242,247,252,.92));box-shadow:0 10px 28px -14px rgba(18,54,95,.28);transition:transform .3s ease,border-color .3s ease;display:flex;flex-direction:column;min-height:140px}
.t-card:hover{transform:translateY(-6px);border-color:rgba(110,170,215,.95)}
.t-card .icon{position:absolute;top:12px;right:12px;font-size:18px}
.t-card h3{margin:0 0 6px;font-size:18px;color:#032540}
.t-card p{margin:0;color:#114066;font-size:13.5px}
@media (max-width:960px){.thesis-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (max-width:560px){.thesis-grid{grid-template-columns:1fr}}

/* 投资合作企业 Logo 墙 */
.logo-wall{margin-top:16px;display:grid;gap:14px}
.logo-wall.invest{grid-template-columns:repeat(6,minmax(0,1fr))}
.logo-card{position:relative;display:flex;align-items:center;justify-content:center;padding:8px;border:1px solid rgba(140,170,200,.40);border-radius:14px;background:linear-gradient(170deg,rgba(255,255,255,.96),rgba(242,247,252,.92));box-shadow:0 8px 18px -12px rgba(18,54,95,.18);transition:transform .2s ease, box-shadow .2s ease}
.logo-card:hover{transform:translateY(-2px);box-shadow:0 14px 28px -14px rgba(18,54,95,.28)}
.logo-card img{width:100%;height:100%;max-width:180px;max-height:72px;object-fit:contain}
@media (max-width:1200px){.logo-wall.invest{grid-template-columns:repeat(5,minmax(0,1fr))}}
@media (max-width:900px){.logo-wall.invest{grid-template-columns:repeat(3,minmax(0,1fr))}}
@media (max-width:600px){.logo-wall.invest{grid-template-columns:repeat(2,minmax(0,1fr))}}

/* ③ 基金画像 */
.profile{padding:20px 0 80px}
.profile-wrap{display:grid;gap:24px;grid-template-columns:2fr 1fr;align-items:stretch}
.table-card{border:1px solid rgba(90,140,175,.65);border-radius:18px;background:#fff;box-shadow:0 10px 28px -14px rgba(18,54,95,.22);padding:10px 0}
.table-card dl{margin:0}
.table-card .row{display:grid;grid-template-columns:180px 1fr;gap:8px;padding:14px 18px;border-bottom:1px dashed rgba(140,170,200,.45)}
.table-card .row:last-child{border-bottom:none}
.table-card dt{color:#3a5a7a;font-weight:700}
.table-card dd{margin:0;color:#1a2a3a;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}
.flow-card{border:1px solid rgba(90,140,175,.65);border-radius:18px;background:linear-gradient(170deg,rgba(255,255,255,.96),rgba(242,247,252,.92));box-shadow:0 10px 28px -14px rgba(18,54,95,.22);padding:18px}
.flow-card h3{margin:0 0 8px;font-size:16px;color:#0a2a4a}
.flow-steps{display:flex;gap:6px;align-items:center;flex-wrap:wrap;margin:6px 0 8px;padding:0;list-style:none}
.flow-steps .b{display:inline-block;padding:6px 10px;border-radius:999px;background:#e9f1fb;color:#0a3a6a;font-weight:700;border:1px solid rgba(80,130,200,.35)}
.flow-steps .arr{color:#5a8fd0;font-weight:700}
.flow-card .hint{margin:0;color:#3a5a7a;font-size:13px}
@media (max-width:960px){.profile-wrap{grid-template-columns:1fr}}

/* ④ 投资流程 */
.process{padding:20px 0 80px}
.timeline{display:grid;gap:18px;grid-template-columns:repeat(6,minmax(0,1fr));align-items:stretch}
.step{position:relative;padding:18px;border:1px solid rgba(90,140,175,.65);border-radius:18px;background:linear-gradient(170deg,rgba(255,255,255,.96),rgba(242,247,252,.92));box-shadow:0 10px 28px -14px rgba(18,54,95,.22);transition:transform .3s ease;display:flex;flex-direction:column}
.step:hover{transform:translateY(-6px)}
.s-icon{width:46px;height:46px;display:flex;align-items:center;justify-content:center;border-radius:14px;background:linear-gradient(145deg,#2e7dff 0%,rgba(255,255,255,.2) 120%);color:#fff;margin-bottom:8px}
.s-title{font-weight:800;color:#0a2a4a;margin-bottom:6px}
.s-desc{color:#114066;font-size:13.5px;margin-top:auto}
@media (max-width:1200px){.timeline{grid-template-columns:repeat(3,minmax(0,1fr))}}
@media (max-width:700px){.timeline{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (max-width:480px){.timeline{grid-template-columns:1fr}}

/* ⑤ 投研体系 */
.research{padding:10px 0 80px;background:
  radial-gradient(780px 300px at 80% -10%,rgba(200,220,245,.45),rgba(200,220,245,0) 70%),
  linear-gradient(180deg,#f6f9fd 0%,#f1f6fc 100%)}
.research-grid{display:grid;gap:22px;grid-template-columns:repeat(3,minmax(0,1fr)) 1.2fr;align-items:stretch}
.card{border:1px solid rgba(90,140,175,.65);border-radius:18px;background:linear-gradient(170deg,rgba(255,255,255,.96),rgba(242,247,252,.92));box-shadow:0 10px 28px -14px rgba(18,54,95,.22);padding:18px;display:flex;flex-direction:column}
.card h3{margin:0 0 8px;color:#0a2a4a}
.card ul{margin:0;padding:0 0 0 16px;color:#114066;display:flex;flex-direction:column;gap:6px}
.report .bullets{margin-bottom:12px}
.download{display:inline-block;padding:8px 12px;border-radius:10px;border:1px solid rgba(80,130,200,.4);background:linear-gradient(170deg,#e9f2ff,#dcebff);color:#0a3a6a;font-weight:700}
@media (max-width:1100px){.research-grid{grid-template-columns:1fr 1fr}}

/* 案例精选区块已按需移除 */

/* ⑦ 双库系统 */
.dualdb{padding:10px 0 80px}
.match-scene{position:relative;margin:16px auto 0;max-width:980px;display:grid;grid-template-columns:1fr auto 1fr;align-items:stretch;gap:24px}
.ring{position:relative;width:300px;height:300px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto;backdrop-filter:blur(12px) saturate(170%);
  background:radial-gradient(120px 120px at 50% 50%,rgba(255,255,255,.60),rgba(255,255,255,.10) 72%);
  box-shadow:0 24px 70px -22px rgba(18,58,105,.48),0 10px 32px -12px rgba(36,90,155,.32);
  border:1px solid rgba(120,170,230,.68);
}
.ring:before{content:"";position:absolute;inset:-2px;border-radius:inherit;padding:2px;background:conic-gradient(from 0deg,#9ad1ff,#2e7dff,#9de9ff,#9ad1ff);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude;opacity:.75}
.ring .halo{position:absolute;inset:-8%;border-radius:50%;background:radial-gradient(220px 120px at 50% 120%,rgba(46,125,255,.28),transparent 70%);filter:blur(12px)}
.ring-core{position:relative;z-index:1;display:flex;flex-direction:column;align-items:center;gap:10px;text-align:center}
.ring-core .title{font-weight:800;color:#0a2a4a}
.chips{display:flex;gap:8px;flex-wrap:wrap;justify-content:center}
.chips span{font-size:12px;padding:6px 10px;border-radius:999px;background:#e9f1fb;color:#0a3a6a;border:1px solid rgba(80,130,200,.35)}

.engine-3d{position:relative;width:260px;height:260px;margin:0 auto;display:flex;align-items:center;justify-content:center}
.engine-core{position:relative;z-index:2;padding:12px 16px;border-radius:16px;color:#0b2b4b;font-weight:800;
  background:linear-gradient(180deg,#ffffff 0%,#edf4ff 100%);
  box-shadow:0 24px 60px -20px rgba(18,58,105,.38),0 0 0 1px rgba(120,170,230,.68) inset}
.engine-3d .pulse{position:absolute;inset:10%;border-radius:50%;background:radial-gradient(circle,rgba(46,125,255,.25),transparent 60%);filter:blur(8px);animation:pulse 3s ease-in-out infinite}
.match-scene:after{content:"";position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:60%;height:2px;background:linear-gradient(90deg,transparent,#8cc6ff,#2e7dff,#8cc6ff,transparent);filter:blur(.2px);opacity:.6}
@keyframes pulse{0%{transform:scale(.9);opacity:.6}50%{transform:scale(1.05);opacity:.85}100%{transform:scale(.9);opacity:.6}}
.orbit{position:absolute;border:1px dashed rgba(120,170,230,.7);border-radius:50%}
.orbit-a{width:220px;height:220px;animation:spin 18s linear infinite}
.orbit-b{width:180px;height:180px;animation:spin 12s linear reverse infinite}
@keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}
.particles{position:absolute;inset:0}
.particles span{position:absolute;left:var(--x);top:var(--y);width:6px;height:6px;border-radius:50%;background:radial-gradient(circle,#9de0ff,#2e7dff);filter:drop-shadow(0 4px 10px rgba(46,125,255,.6));animation:float var(--d) ease-in-out infinite alternate}
@keyframes float{0%{transform:translate(-4px,-3px)}100%{transform:translate(6px,5px)}}

.dualdb .tiny{margin:16px 0 0;color:#3a5a7a;text-align:center}
@media (max-width:900px){.match-scene{grid-template-columns:1fr;gap:18px}.engine-3d{order:3}}

/* ⑧ 生态共建 */
.ecosys{padding:10px 0 120px}
.loop{display:flex;gap:10px;flex-wrap:wrap;align-items:center;justify-content:center}
.loop-item{padding:8px 12px;border-radius:999px;background:#e9f1fb;color:#0a3a6a;border:1px solid rgba(80,130,200,.35);font-weight:700}
.loop .arrow{color:#5a8fd0;font-weight:800}
.loop .emph{background:linear-gradient(170deg,#e9f1fb,#dcebff);box-shadow:0 6px 16px -8px rgba(40,90,160,.35)}
</style>
