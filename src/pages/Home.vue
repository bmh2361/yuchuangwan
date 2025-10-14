<template>
  <div class="one-bg">
    <section class="unified-block" v-reveal>
      <div class="unified-bg" aria-hidden="true"></div>
      <div class="unified-overlay" aria-hidden="true"></div>
      <div class="unified-grid" aria-hidden="true"></div>
      <div class="unified-inner container">
        <h1 class="hero-title tight">育创湾 · 全流程技术转移与成果转化平台</h1>
        <p class="hero-sub">连接企业需求与高校/科研成果，提供贯穿“诊断—匹配—验证—合规—资本—落地运营”的一体化服务。</p>
        <p class="hero-sub">以数据与专家网络驱动决策，缩短创新转化路径，提升成果落地效率。</p>
        <div class="stats">
          <div class="stat-card" v-for="s in stats" :key="s.label">
            <div class="val" v-countup="s.value">0</div>
            <div class="lab">{{ s.label }}</div>
          </div>
        </div>
        <h2 class="section-heading compact">核心服务</h2>
        <div class="core-grid">
          <div v-for="f in features" :key="f.title" class="core-card" v-tilt>
            <h3>{{ f.title }}</h3>
            <p>{{ f.desc }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
const stats = [
  { label:'专家网络', value:500 },
  { label:'双一流高校直连', value:1 },
  { label:'全链条服务环节', value:6 },
]
const features = [
  { title:'需求诊断', desc:'梳理痛点、评估技术可行性与投入产出预期。' },
  { title:'技术匹配', desc:'多源成果库+专家筛选，精准对接最优技术方向。' },
  { title:'PoC / 中试', desc:'验证关键参数，降低规模化落地的不确定性。' },
  { title:'知识产权与合规', desc:'专利评估、组合布局及政策/认证合规辅导。' },
  { title:'资本助力', desc:'项目路演、投融资撮合与产业基金协同。' },
  { title:'园区与运营', desc:'载体空间、政策集成与成果持续运营支持。' },
]
</script>

<style scoped>
/* 字体统一设置：引用全局变量 */
.unified-inner,.stats,.core-grid,.core-card{font-family:var(--font-base);font-variant-numeric:tabular-nums lining-nums;}
.stat-card .val,.core-card h3{font-family:var(--font-base);font-variant-numeric:tabular-nums;letter-spacing:.5px;}
/* 数字对齐保证：强制等宽数字 */
.stat-card .val{font-feature-settings:'tnum' 1,'lnum' 1;}
.core-card h3{font-feature-settings:'tnum' 1,'lnum' 1;}
/* 统一段落字体渲染 */
.core-card p{font-family:var(--font-base);}

/* 统一单背景布局 */
.unified-block{position:relative;overflow:hidden;padding:132px 0 138px;}
@media (max-width:960px){.unified-block{padding:112px 0 126px;}}
.unified-bg{position:absolute;inset:0;background:
  linear-gradient(180deg,rgba(224,236,248,.90) 0%,rgba(218,232,246,.78) 20%,rgba(210,228,244,.60) 44%,rgba(202,222,240,.54) 64%,rgba(196,218,238,.56) 100%),
  radial-gradient(1300px 880px at 72% 54%,rgba(32,92,170,.45),rgba(32,92,170,0) 70%),
  url('/images/hero/background.jpg') center/cover no-repeat;
  filter:brightness(.92) saturate(1.10) contrast(1.06);
}
@media (max-width:780px){
  .unified-bg{background:
    linear-gradient(185deg,rgba(238,245,252,.85) 0%,rgba(230,241,250,.68) 40%,rgba(222,236,248,.52) 70%,rgba(214,232,246,.50) 100%),
    radial-gradient(900px 640px at 56% 34%,rgba(56,140,225,.30),rgba(56,140,225,0) 70%),
    url('/images/hero/background.jpg') center/cover no-repeat;
  }
}
.unified-overlay{position:absolute;inset:0;pointer-events:none;background:
  linear-gradient(115deg,rgba(255,255,255,.42) 0%,rgba(250,252,255,.30) 40%,rgba(240,248,255,.18) 68%,rgba(234,244,252,.10) 100%),
  radial-gradient(880px 520px at 18% 34%,rgba(255,255,255,.45),rgba(255,255,255,0) 70%);
}
.unified-grid{position:absolute;inset:0;pointer-events:none;background:
  repeating-linear-gradient(90deg,rgba(40,115,205,.085) 0 1px,transparent 1px 60px),
  repeating-linear-gradient(0deg,rgba(40,115,205,.085) 0 1px,transparent 1px 60px);
  mix-blend-mode:overlay;opacity:.42;animation:uniGrid 32s linear infinite;
  mask:linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,.55) 58%,rgba(0,0,0,0) 100%);
}
@keyframes uniGrid {0%{transform:translateY(0)}100%{transform:translateY(-60px)}}
.unified-inner{position:relative;z-index:2;max-width:1180px;}

/* 标题与副标题 */
.hero-title{font-size:clamp(34px,5vw,58px);line-height:1.08;margin:0 0 22px;font-weight:800;background:linear-gradient(95deg,#123153 0%,#195894 25%,#2373c8 48%,#2e7dff 65%,#55beff 82%,#9de9ff 100%);-webkit-background-clip:text;color:transparent;letter-spacing:.55px;text-wrap:balance;filter:drop-shadow(0 6px 18px rgba(60,140,220,.25)) drop-shadow(0 2px 4px rgba(0,0,0,.32));}
.hero-title.tight{margin-bottom:16px;}
.hero-sub{margin:0 0 10px;font-size:15px;line-height:1.55;color:#34526a;max-width:860px;}

/* 统计卡片 */
.stats{display:grid;grid-template-columns:repeat(3,150px);gap:24px;margin:34px 0 16px;}
@media (max-width:640px){.stats{grid-template-columns:repeat(3,1fr);} }
@media (max-width:480px){.stats{grid-template-columns:repeat(2,1fr);} }
.stat-card{background:linear-gradient(160deg,rgba(255,255,255,.82),rgba(245,250,255,.75) 55%,rgba(235,244,252,.78));border:1px solid rgba(170,200,228,.72);border-radius:18px;padding:18px 16px;text-align:center;box-shadow:0 6px 24px -10px rgba(40,90,150,.22),0 2px 10px -4px rgba(40,90,150,.16);transition:transform .35s ease, box-shadow .35s ease,border-color .35s ease;backdrop-filter:blur(6px) saturate(130%);}
.stat-card .val{font-size:32px;font-weight:700;line-height:1.05;background:linear-gradient(88deg,#15345c,#2e7dff 55%,#6ab9ff);-webkit-background-clip:text;color:transparent;margin-bottom:6px;letter-spacing:.5px;}
.stat-card .lab{font-size:11px;letter-spacing:.6px;color:#5a7794;text-transform:uppercase;}
.stat-card:hover{transform:translateY(-6px);box-shadow:0 16px 40px -14px rgba(40,90,150,.30),0 8px 22px -10px rgba(40,90,150,.20);border-color:rgba(150,190,225,.95);}

/* 核心服务网格 */
.section-heading{margin:72px 0 32px;font-size:26px;font-weight:700;letter-spacing:.5px;background:linear-gradient(90deg,#16406d,#2e7dff 55%,#6ec4ff);-webkit-background-clip:text;color:transparent;}
.section-heading.compact{margin-top:62px;}
.core-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:30px;}
@media (max-width:960px){.core-grid{grid-template-columns:repeat(2,minmax(0,1fr));}}
@media (max-width:560px){.core-grid{grid-template-columns:1fr;}}
.core-card{position:relative;padding:30px 28px 36px;border:1px solid rgba(90,140,175,.78);border-radius:22px;background:linear-gradient(170deg,rgba(255,255,255,.94),rgba(242,247,252,.90) 60%,rgba(232,240,248,.92));backdrop-filter:blur(12px) saturate(175%);box-shadow:0 10px 34px -14px rgba(18,54,95,.38),0 4px 16px -4px rgba(30,80,140,.26);}
.core-card:before{display:none;}
.core-card h3{margin:0 0 10px;font-size:19px;font-weight:700;color:#032540;letter-spacing:.6px;text-shadow:0 1px 2px rgba(0,0,0,.08);} 
.core-card p{margin:0;font-size:14px;line-height:1.66;color:#08385d;text-shadow:0 1px 1px rgba(255,255,255,.35);} 
.core-card:hover{transform:translateY(-8px);border-color:rgba(110,170,215,.95);box-shadow:0 20px 50px -18px rgba(18,58,105,.50),0 10px 30px -12px rgba(36,90,155,.34);} 
</style>
