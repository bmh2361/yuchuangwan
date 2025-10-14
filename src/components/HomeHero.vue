<template>
  <section class="home-hero" v-reveal>
    <div class="home-hero__overlay"></div>
    <div class="home-hero__content container">
      <h1 class="home-hero__title">育创湾</h1>
      <p class="home-hero__subtitle">科技创新服务平台 · 专注技术转移与成果转化</p>
      <div class="home-hero__cta">
        <RouterLink class="btn btn-primary" to="/services">了解服务内容</RouterLink>
        <RouterLink class="btn btn-outline" to="/contact">联系我们</RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.home-hero {
  position: relative;
  min-height: 72vh;
  display: grid;
  place-items: center;
  background-image: url('/images/hero/background.jpg'), url('/images/project.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  border-bottom: 1px solid var(--border);
  padding-bottom: 80px;
}
.home-hero__overlay {
  position: absolute; inset: 0;
  background: linear-gradient(180deg, rgba(6,25,56,0.35) 0%, rgba(6,25,56,0.55) 60%, rgba(6,25,56,0.75) 100%);
}
.home-hero__content { position: relative; text-align: center; color: #fff; }
.home-hero__title { font-size: clamp(28px, 6vw, 56px); line-height: 1.1; margin: 0 0 12px; font-weight: 800; letter-spacing: 0.5px; }
.home-hero__subtitle { font-size: clamp(14px, 2.2vw, 18px); opacity: .95; margin: 0 0 24px; }
.home-hero__cta { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }

@media (max-width: 960px){
  .home-hero { min-height: 64vh; padding-bottom: 56px; }
}

.btn { padding: 10px 16px; border-radius: 10px; border: 1px solid transparent; font-weight: 600; letter-spacing: .3px; transition: all .2s ease; }
.btn-primary { background: var(--primary); color: #fff; box-shadow: 0 6px 18px rgba(21,100,255,.25); }
.btn-primary:hover { filter: brightness(1.05); transform: translateY(-1px); }
.btn-outline { background: rgba(255,255,255,.08); border-color: rgba(255,255,255,.25); color: #fff; backdrop-filter: blur(4px); }
.btn-outline:hover { background: rgba(255,255,255,.16); }
</style>