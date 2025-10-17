<template>
  <div class="policy-page">
    <!-- ① 政策导向 Hero -->
    <section class="policy-hero container" id="hero">
      <div class="hero-bg" aria-hidden="true"></div>
      <div class="hero-grid" aria-hidden="true"></div>
      <h1 class="title">以政策为导向，构建科技成果转化新生态</h1>
      <p class="lead">育创湾严格遵循国家科技创新与成果转化政策，致力于打通“从科研到产业”的制度链路，
        以专业化的技术转移机制与投研体系，推动政策落地与产业转型升级。</p>
      <div class="keywords">
        <span class="chip" v-for="k in heroKeys" :key="k" v-reveal>{{ k }}</span>
      </div>
      <div class="tags-cloud" aria-hidden="true">
        <span class="strong">科技成果转化</span><span class="strong">产学研融合</span><span class="strong">知识产权</span>
        <span class="strong">政策合规</span><span class="strong">标准化流程</span><span class="strong">制度建设</span>
      </div>
    </section>

    <!-- 页内锚点导航 -->
    

    <!-- ② 政策背景与顶层设计 -->
    <section class="policy-context container" id="context" v-reveal>
      <div class="sec-head">
        <h2>政策背景与顶层设计</h2>
        <p>政策层面已将科技成果转化上升为国家战略性产业。核心文件包括：</p>
      </div>
      <div class="docs">
        <div class="doc-card" v-tilt>
          <div class="icon">📄</div>
          <h3>《中华人民共和国促进科技成果转化法》</h3>
        </div>
        <div class="doc-card" v-tilt>
          <div class="icon">📄</div>
          <h3>《国家技术转移体系建设方案》</h3>
        </div>
        <div class="doc-card" v-tilt>
          <div class="icon">📄</div>
          <h3>《“十四五”国家科技创新规划》</h3>
        </div>
      </div>
      <div class="grid4">
        <div class="g4-card" v-tilt>
          <div class="g-icon">⚖️</div>
          <h4>法规</h4>
          <p>构建以企业为主体、市场为导向的创新体系。</p>
        </div>
        <div class="g4-card" v-tilt>
          <div class="g-icon">🎯</div>
          <h4>激励</h4>
          <p>完善确权、收益分配、职务发明激励机制。</p>
        </div>
        <div class="g4-card" v-tilt>
          <div class="g-icon">🔗</div>
          <h4>融合</h4>
          <p>推动科研与资本、产业深度融合。</p>
        </div>
        <div class="g4-card" v-tilt>
          <div class="g-icon">👤</div>
          <h4>体系</h4>
          <p>建立技术经理人职业化体系。</p>
        </div>
      </div>
      <p class="tail">育创湾以此为纲，形成自身的政策响应框架，让科研成果在制度、资金、场景、市场四个维度实现贯通。</p>
    </section>

    <!-- ③ 政策落地路径 -->
  <section class="policy-path container" id="path" v-reveal>
      <div class="sec-head">
        <h2>政策落地路径</h2>
        <p>围绕政策目标，从制度执行、流程优化、资源协同、合规审查四方面建立落地机制：</p>
      </div>
      <div class="table-wrap">
        <div class="table-caption">育创湾政策落地体系</div>
        <table class="tbl">
          <thead>
            <tr><th>模块</th><th>主要内容</th><th>目标效果</th></tr>
          </thead>
          <tbody>
            <tr><td>制度执行</td><td>对接国家与地方政策，建立科技成果转化标准流程</td><td>政策与操作“无缝衔接”</td></tr>
            <tr><td>流程优化</td><td>建立高校—企业—政府之间的标准化对接机制</td><td>降低沟通成本，提升转化率</td></tr>
            <tr><td>资源协同</td><td>联动园区、基金、平台、服务机构</td><td>实现政策与资本的同频共振</td></tr>
            <tr><td>合规审查</td><td>设立法务与知识产权审查机制</td><td>确保项目合法合规运行</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- ④ 政策驱动的创新生态 -->
  <section class="policy-eco container" id="eco" v-reveal>
      <div class="sec-head">
        <h2>政策驱动的创新生态</h2>
        <p>我们将政策理解为创新生态的驱动力，通过研究、培训与联动三项工作，将宏观政策转化为微观行动。</p>
      </div>
      <div class="eco-grid">
        <div class="eco-card" v-tilt>
          <div class="bar"></div>
          <h3>政策研究与对标分析</h3>
          <p>定期追踪中央与地方科技创新政策，形成《年度政策白皮书》。</p>
        </div>
        <div class="eco-card" v-tilt>
          <div class="bar"></div>
          <h3>政策赋能与培训</h3>
          <p>为高校、园区及企业开展成果转化合规培训、技术经理人制度建设课程。</p>
        </div>
        <div class="eco-card" v-tilt>
          <div class="bar"></div>
          <h3>政策与资本联动机制</h3>
          <p>结合政策导向基金、PoC补贴与成果转化专项，形成“服务 + 投资”双轮闭环。</p>
        </div>
      </div>
    </section>

    <!-- ⑤ 政策成果与影响 -->
  <section class="policy-outcomes container" id="outcomes" v-reveal>
      <div class="sec-head">
        <h2>政策成果与影响</h2>
      </div>
      <div class="out-grid">
        <div class="out-card" v-tilt>
          <div class="num"><span v-countup="10">0</span>+</div>
          <div class="txt">政策合规转化流程模板</div>
        </div>
        <div class="out-card" v-tilt>
          <div class="num"><span v-countup="20">0</span>+</div>
          <div class="txt">高校与园区政策联动项目</div>
        </div>
        <div class="out-card" v-tilt>
          <div class="num"><span v-countup="300">0</span>+</div>
          <div class="txt">技术经理人与政策培训学员</div>
        </div>
        <div class="out-card" v-tilt>
          <div class="num"><span v-countup="5">0</span>+</div>
          <div class="txt">政府合作平台</div>
        </div>
        <div class="out-card" v-tilt>
          <div class="num"><span v-countup="2">0</span></div>
          <div class="txt">政策白皮书与成果报告（期）</div>
        </div>
        <div class="out-card" v-tilt>
          <div class="num"><span v-countup="50">0</span>+</div>
          <div class="txt">政策驱动转化项目落地</div>
        </div>
        <div class="out-card" v-tilt>
          <div class="num"><span v-countup="30">0</span>+</div>
          <div class="txt">政策解读与合规培训场次</div>
        </div>
        <div class="out-card" v-tilt>
          <div class="num"><span v-countup="60">0</span>+</div>
          <div class="txt">政策专题研究与案例条目</div>
        </div>
      </div>
    </section>

    <!-- ⑥ 政策研究与报告 -->
  <section class="policy-reports container" id="reports" v-reveal>
      <div class="sec-head">
        <h2>政策研究与报告</h2>
      </div>
      <div class="rep-wrap">
        <div class="rep-col card">
          <h3>重点研究方向</h3>
          <ul>
            <li>科技成果转化政策执行效果分析</li>
            <li>高校科研成果收益分配机制比较</li>
            <li>地方创新政策与产业基金联动模式</li>
            <li>技术经理人制度建设与实践案例</li>
          </ul>
        </div>
        <div class="rep-col card">
          <h3>可用内容</h3>
          <ul>
            <li>《2025 中国科技成果转化政策白皮书》</li>
            <li>《技术经理人制度化路径研究报告》</li>
            <li>《政策驱动的产业基金模式分析》</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- ⑦ 结语与愿景 -->
  <section class="policy-vision container" id="vision" v-reveal>
      <div class="vision-bg" aria-hidden="true"></div>
      <h2 class="v-title">从政策到产业，从制度到生产力</h2>
      <p class="v-sub">政策不是限制，而是创新的方向。我们将持续以政策为指南、以合规为底线、以创新为路径，推动科技成果在制度化框架中实现价值最大化。</p>
    </section>
  </div>
</template>

<script setup lang="ts">
const heroKeys = ['科技成果转化法','技术转移体系建设方案','创新驱动发展战略']
</script>

<style scoped>
.policy-page{position:relative;padding-top:40px}
/* ① Hero */
.policy-hero{position:relative;padding:86px 0 56px;text-align:center;overflow:hidden}
.policy-hero .hero-bg{position:absolute;inset:-20%;background:
  radial-gradient(900px 520px at 50% -10%,rgba(56,140,225,.30),rgba(56,140,225,0) 70%),
  linear-gradient(180deg,#0f2747 0%,#12416f 42%,#1a62b0 78%,#f4f8ff 130%);
  filter:saturate(112%);opacity:.96}
.policy-hero .hero-grid{position:absolute;inset:0;background:
  repeating-linear-gradient(90deg,rgba(255,255,255,.06) 0 1px,transparent 1px 60px),
  repeating-linear-gradient(0deg,rgba(255,255,255,.05) 0 1px,transparent 1px 60px);
  mask:linear-gradient(180deg,rgba(0,0,0,.0) 0%,rgba(0,0,0,.55) 55%,rgba(0,0,0,0) 100%);
  animation:heroGrid 36s linear infinite;opacity:.26}
@keyframes heroGrid{0%{transform:translateY(0)}100%{transform:translateY(-60px)}}
.policy-hero .title{position:relative;margin:0 0 16px;font-size:clamp(34px,5vw,52px);font-weight:800;letter-spacing:.4px;background:linear-gradient(95deg,#a9c4ff 0%,#d6e7ff 55%,#ffffff 100%);-webkit-background-clip:text;color:transparent;filter:drop-shadow(0 8px 28px rgba(0,0,0,.35))}
.policy-hero .lead{position:relative;margin:0 auto 16px;max-width:960px;color:#e0edff;opacity:.95;line-height:1.65}
.keywords{display:flex;gap:10px;flex-wrap:wrap;justify-content:center;margin-top:8px}
.chip{padding:8px 12px;border-radius:999px;border:1px solid rgba(180,210,255,.5);background:linear-gradient(160deg,rgba(255,255,255,.10),rgba(255,255,255,.03));color:#e6f0ff;font-size:12px;backdrop-filter:blur(8px) saturate(150%)}
.tags-cloud{pointer-events:none;position:absolute;inset:0;display:flex;gap:12px;flex-wrap:wrap;justify-content:center;align-content:flex-end;padding:40px 20px 0}
.tags-cloud span{color:#cfe3ff;font-size:12px;border:1px dashed rgba(180,210,255,.40);border-radius:999px;padding:6px 10px;opacity:.5}
.tags-cloud span.strong{color:#ffffff;opacity:.95;border-color:rgba(230,245,255,.9);font-weight:800;letter-spacing:.3px;box-shadow:0 6px 18px -12px rgba(0,0,0,.45)}

/* 页内锚点导航 */
.section-nav{display:flex;gap:10px;flex-wrap:wrap;justify-content:center;padding:12px 0 8px;margin-bottom:24px}
.section-nav a{padding:6px 10px;border-radius:999px;border:1px solid rgba(140,170,200,.45);background:#fff;color:#0a2a4a;font-size:12px}
.section-nav a:hover{background:#f4f8ff}

/* 通用区块头 */
.sec-head{margin:0 auto 16px;max-width:900px}
.sec-head h2{margin:0 0 6px;font-size:26px;font-weight:800;letter-spacing:.4px;background:linear-gradient(90deg,#16406d,#2e7dff 55%,#6ec4ff);-webkit-background-clip:text;color:transparent}
.sec-head p{margin:0;color:#34526a}

/* ② 背景与顶层设计 */
.policy-context{padding:40px 0 56px}
.docs{display:grid;gap:16px;grid-template-columns:repeat(3,minmax(0,1fr));margin-bottom:14px}
.doc-card{display:flex;gap:8px;align-items:center;padding:12px 14px;border:1px solid rgba(140,170,200,.40);border-radius:14px;background:#fff;box-shadow:0 6px 16px -10px rgba(18,54,95,.18)}
.doc-card .icon{font-size:18px}
.grid4{display:grid;gap:18px;grid-template-columns:repeat(4,minmax(0,1fr));margin-top:10px}
.g4-card{position:relative;padding:16px 14px;border:1px solid rgba(140,170,200,.40);border-radius:16px;background:#fff;box-shadow:0 8px 18px -12px rgba(18,54,95,.18)}
.g-icon{position:absolute;right:12px;top:10px;opacity:.6}
.g4-card h4{margin:0 0 6px;color:#0a2a4a}
.g4-card p{margin:0;color:#114066;font-size:13.5px}
@media (max-width:960px){.docs{grid-template-columns:1fr}.grid4{grid-template-columns:repeat(2,minmax(0,1fr))}}

/* ③ 落地路径 */
.policy-path{padding:20px 0 56px}
.table-wrap{position:relative;overflow:auto;border-radius:14px;border:1px solid rgba(140,170,200,.35);background:#fff;box-shadow:0 6px 18px -12px rgba(18,54,95,.16)}
.table-caption{position:absolute;right:10px;top:8px;color:#3a5a7a;font-size:12px}
.tbl{width:100%;border-collapse:collapse}
.tbl thead th{background:#f4f7fb;color:#34526a;font-weight:700;font-size:13px;text-align:left;padding:12px;border-bottom:1px solid #e2eaf4}
.tbl tbody td{padding:12px;border-bottom:1px solid #edf2f8;color:#20425e;font-size:13.5px}
.tbl tbody tr:hover td{background:#f8fbff}

/* ④ 创新生态 */
.policy-eco{padding:20px 0 56px}
.eco-grid{display:grid;gap:18px;grid-template-columns:repeat(3,minmax(0,1fr))}
.eco-card{position:relative;padding:16px;border:1px solid rgba(140,170,200,.40);border-radius:16px;background:#fff;box-shadow:0 8px 18px -12px rgba(18,54,95,.18)}
.eco-card .bar{position:absolute;left:0;top:0;height:100%;width:6px;border-radius:16px 0 0 16px;background:linear-gradient(180deg,#2e7dff,#9bd7ff)}
.eco-card h3{margin:4px 0 6px;color:#0a2a4a}
.eco-card p{margin:0;color:#114066;font-size:13.5px}
@media (max-width:960px){.eco-grid{grid-template-columns:1fr}}

/* ⑤ 成果与影响 */
.policy-outcomes{padding:20px 0 56px}
.out-grid{display:grid;gap:18px;grid-template-columns:repeat(4,minmax(0,1fr))}
.out-card{padding:16px;border:1px solid rgba(140,170,200,.40);border-radius:16px;background:#fff;box-shadow:0 6px 18px -12px rgba(18,54,95,.16);text-align:center}
.out-card .num{font-size:28px;font-weight:800;background:linear-gradient(88deg,#15345c,#2e7dff 55%,#6ab9ff);-webkit-background-clip:text;color:transparent}
.out-card .txt{font-size:12px;color:#34526a}
@media (max-width:1280px){.out-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}
@media (max-width:700px){.out-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (max-width:460px){.out-grid{grid-template-columns:1fr}}

/* ⑥ 报告 */
.policy-reports{padding:20px 0 56px}
.rep-wrap{display:grid;gap:18px;grid-template-columns:repeat(2,minmax(0,1fr))}
.card{padding:16px;border:1px solid rgba(90,140,175,.65);border-radius:16px;background:linear-gradient(170deg,rgba(255,255,255,.96),rgba(242,247,252,.92));box-shadow:0 10px 28px -14px rgba(18,54,95,.22)}
.card h3{margin:0 0 6px;color:#0a2a4a}
.card ul{margin:0;padding:0 0 0 18px;color:#114066}
@media (max-width:800px){.rep-wrap{grid-template-columns:1fr}}

/* ⑦ 愿景 */
.policy-vision{position:relative;padding:56px 0 80px;text-align:center}
.policy-vision .vision-bg{position:absolute;inset:0;background:
  radial-gradient(780px 320px at 50% -10%,rgba(56,140,225,.35),rgba(56,140,225,0) 70%),
  linear-gradient(180deg,#0f2747 0%,#12416f 42%,#1a62b0 90%);
  opacity:.95}
.policy-vision .v-title{position:relative;margin:0 0 10px;font-size:28px;font-weight:800;letter-spacing:.4px;background:linear-gradient(95deg,#a9c4ff 0%,#d6e7ff 55%,#ffffff 100%);-webkit-background-clip:text;color:transparent}
.policy-vision .v-sub{position:relative;margin:0 auto;max-width:820px;color:#e3efff}
</style>
