<template>
  <section class="page container" v-reveal>
    <h1 class="page-title">服务支持</h1>
    <p class="page-desc">我们提供从材料清单、流程辅导、系统培训到专家对接的一站式支持，助力项目顺利推进。</p>
    <ul class="list">
      <li>流程与节点安排</li>
      <li>资料模板与规范</li>
      <li>线上系统与表单培训</li>
      <li>专家评审与路演辅导</li>
      <li>常见问题答疑</li>
    </ul>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.page { padding: 32px 0 60px; }
.page-title { font-size: 28px; font-weight: 800; color: var(--text-strong); margin-bottom: 8px; }
.page-desc { color: var(--text-soft); margin-bottom: 16px; }
.list { display: grid; gap: 8px; grid-template-columns: repeat(2, minmax(0,1fr)); }
@media (max-width: 640px){ .list { grid-template-columns: 1fr; } }
.list li { padding: 12px 14px; border: 1px solid var(--border); border-radius: 12px; background: var(--card); }
</style>