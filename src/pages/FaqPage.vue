<template>
  <section class="faq-page container" v-reveal>
    <header class="faq-hero">
      <h1>常见问题 <span class="en">FAQ</span></h1>
      <p>汇总大家最关心的问题，帮助您快速了解育创湾的服务、流程与合作方式。</p>
    </header>

    <div class="faq-groups">
      <div class="faq-card" v-for="g in groups" :key="g.key" v-tilt>
        <h3>{{ g.title }}</h3>
        <ul class="qa-list">
          <li v-for="qa in g.items" :key="qa.q">
            <button class="q" @click="qa.open = !qa.open" :aria-expanded="qa.open">
              <span class="marker">Q</span>
              <span class="text">{{ qa.q }}</span>
              <span class="arrow" :class="{open: qa.open}"></span>
            </button>
            <div class="a" v-show="qa.open">
              <span class="marker a-mark">A</span>
              <div class="text">{{ qa.a }}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

type QA = { q: string; a: string; open?: boolean }

type Group = { key: string; title: string; items: QA[] }

const groups = reactive<Group[]>([
  {
    key: 'service',
    title: '服务与合作',
    items: [
      { q: '你们主要提供哪些服务？', a: '占位：技术转移、投研服务、园区承接、高校合作等。' },
      { q: '如何发起合作？', a: '占位：通过联系我们页面提交信息或拨打电话，我们会在1-2个工作日内回复。' },
      { q: '是否支持国际合作？', a: '占位：支持，与英国及欧洲多所科研院校有长期合作通道。' },
    ]
  },
  {
    key: 'process',
    title: '流程与周期',
    items: [
      { q: '匹配一个合适的团队大概需要多久？', a: '占位：通常 3-10 个工作日，复杂需求会更久。' },
      { q: 'PoC 与中试阶段如何推进？', a: '占位：由项目经理协调企业、园区与高校资源，明确时间表与里程碑。' },
    ]
  },
  {
    key: 'policy',
    title: '政策与合规',
    items: [
      { q: '跨境数据与样品如何合规？', a: '占位：按两地法规进行分级管理，并在协作前完成合规审查。' },
      { q: '知识产权如何保护？', a: '占位：提供确权、许可与转让的标准化方案与模板。' },
    ]
  }
])
</script>

<style scoped>
.faq-page{padding:34px 0 80px}
.faq-hero{text-align:center;margin-bottom:18px}
.faq-hero h1{margin:0 0 8px;font-size:clamp(28px,4.6vw,38px);font-weight:800;letter-spacing:.3px;color:#0a2a47}
.faq-hero h1 .en{margin-left:8px;font-size:14px;color:#2a64a2}
.faq-hero p{margin:0;color:#34526a}

.faq-groups{display:grid;gap:18px;grid-template-columns:1fr}
@media (min-width:1000px){.faq-groups{grid-template-columns:1fr 1fr}}

.faq-card{position:relative;padding:16px;border:1px solid rgba(90,140,175,.65);border-radius:16px;background:linear-gradient(170deg,rgba(255,255,255,.96),rgba(242,247,252,.92));box-shadow:0 10px 24px -14px rgba(18,54,95,.22)}
.faq-card h3{margin:0 0 10px;color:#0a2a4a}

.qa-list{list-style:none;margin:0;padding:0;display:grid;gap:10px}
.q{width:100%;display:flex;align-items:center;gap:10px;justify-content:space-between;padding:10px 12px;border-radius:12px;border:1px solid rgba(140,170,200,.45);background:#fff;text-align:left}
.q .marker{display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:999px;background:#e9f2ff;color:#1a4b8f;font-weight:800;flex:0 0 22px}
.q .text{flex:1;color:#0a2a4a}
.q .arrow{width:10px;height:10px;border-right:2px solid #466d95;border-bottom:2px solid #466d95;transform:rotate(-45deg);transition:transform .18s ease}
.q .arrow.open{transform:rotate(45deg)}

.a{display:grid;grid-template-columns:22px 1fr;gap:10px;align-items:start;padding:6px 10px 0}
.a .a-mark{background:#eaf7ea;color:#1a7f3a}
.a .text{color:#114066}
</style>
