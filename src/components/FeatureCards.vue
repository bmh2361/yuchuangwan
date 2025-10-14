<template>
  <section class="features container" v-reveal>
    <h2 class="section-title">我们能为你做什么</h2>
    <div class="grid">
      <RouterLink v-for="f in features" :key="f.to" class="card" :to="f.to" v-tilt>
        <div class="icon" :aria-hidden="true">{{ f.icon }}</div>
        <h3 class="title">{{ f.title }}</h3>
        <p class="desc">{{ f.desc }}</p>
        <span class="link">前往 {{ f.title }} →</span>
      </RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

const features = [
  { to:'/about', title:'公司介绍', desc:'了解育创湾的定位与优势', icon:'🏢' },
  { to:'/services', title:'服务内容', desc:'技术转移、成果转化与数字化服务', icon:'🛠️' },
  { to:'/projects', title:'服务项目', desc:'典型项目与服务清单', icon:'📋' },
  { to:'/support', title:'服务支持', desc:'流程、资料与对接支持', icon:'�' },
  { to:'/clients', title:'合作伙伴', desc:'与我们携手的机构与企业', icon:'🤝' },
  { to:'/contact', title:'联系我们', desc:'电话、邮箱与地址', icon:'📞' },
]
</script>

<style scoped>
.section-title { font-size: 22px; font-weight: 800; color: var(--text-strong); margin-bottom: 16px; }
.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
@media (max-width: 1024px){ .grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px){ .grid { grid-template-columns: 1fr; } }

.features { position: relative; margin-top: -72px; }
@media (max-width: 960px){ .features { margin-top: -56px; } }

.card { display: grid; gap: 8px; padding: 18px; border: 1px solid var(--border); border-radius: 14px; background: var(--card);
  text-decoration: none; color: inherit; transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease; }
.card { box-shadow: 0 10px 24px rgba(13, 39, 80, .06); }
.card:hover { transform: translateY(-4px); box-shadow: 0 16px 32px rgba(13, 39, 80, .12); border-color: var(--primary-200, #cfe0ff); }
.icon { font-size: 28px; line-height: 1; }
.title { font-size: 18px; font-weight: 700; color: var(--text-strong); }
.desc { font-size: 13px; color: var(--text-soft); }
.link { margin-top: 6px; font-size: 13px; color: var(--primary); font-weight: 600; }
</style>