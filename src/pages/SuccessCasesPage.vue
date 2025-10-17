<template>
  <div class="container" v-reveal>
    <header class="section-header">
      <h2>成功案例</h2>
      <p>精选项目案例的目标、路径与成果展示。</p>
    </header>
    <div class="cases-grid">
      <article class="case card" v-for="i in 6" :key="i" v-tilt>
        <h3>案例 {{ i }}</h3>
        <p>项目简介占位：技术方向、合作单位与落地效果。</p>
        <ul>
          <li>痛点与目标</li>
          <li>合作模式与路径</li>
          <li>阶段性成果</li>
        </ul>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.cases-grid{display:grid;gap:16px;grid-template-columns:repeat(3,minmax(0,1fr))}
.card{border:1px solid rgba(90,140,175,.65);border-radius:14px;background:linear-gradient(170deg,rgba(255,255,255,.96),rgba(242,247,252,.92));box-shadow:0 10px 24px -14px rgba(18,54,95,.22);padding:16px}
.card h3{margin:0 0 8px;color:#0a2a4a}
.card ul{margin:0;padding-left:18px;color:#114066}
@media (max-width:960px){.cases-grid{grid-template-columns:1fr}}
</style>
