<template>
  <header class="site-header" id="top">
    <div class="container header-inner">
      <a class="logo" href="#top" aria-label="网站首页">
  <img src="/images/brand/logo1.png?v=1" alt="育创湾" style="height:34px;object-fit:contain;image-rendering:auto;" />
        <span style="font-weight:700;color:#0b234a">育创湾</span>
      </a>
      <nav class="nav">
        <RouterLink to="/">首页</RouterLink>
        <RouterLink to="/about">关于我们</RouterLink>
        <RouterLink to="/services">服务体系</RouterLink>
        <RouterLink to="/tech">技术成果库 / 科研对接</RouterLink>
        <RouterLink to="/cases">产业合作 / 成功案例</RouterLink>
        <RouterLink to="/fund">基金与投研</RouterLink>
        <RouterLink to="/news">新闻与活动</RouterLink>
        <RouterLink to="/policy">政策支持 / 政府合作</RouterLink>
        <RouterLink to="/contact">联系我们</RouterLink>
      </nav>
    </div>
  </header>
  <main>
    <RouterView />
  </main>
  <Footer />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
import { onMounted, onBeforeUnmount } from 'vue'

onMounted(()=>{
  const header = document.querySelector('.site-header') as HTMLElement | null
  if(!header) return
  const onScroll = () => {
    if(window.scrollY > 24) header.classList.add('shrink')
    else header.classList.remove('shrink')
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
  onBeforeUnmount(()=> window.removeEventListener('scroll', onScroll))
})
</script>
