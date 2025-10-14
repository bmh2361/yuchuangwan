<template>
  <header class="site-header" id="top">
    <div class="container header-inner">
      <a class="logo" href="#top" aria-label="网站首页">
  <img src="/images/brand/logo1.png?v=1" alt="育创湾" style="height:34px;object-fit:contain;image-rendering:auto;" />
        <span style="font-weight:700;color:#0b234a">育创湾</span>
      </a>
      <nav class="nav">
        <RouterLink to="/">首页</RouterLink>
        <RouterLink to="/about">公司介绍</RouterLink>
        <RouterLink to="/services">服务内容</RouterLink>
        <RouterLink to="/projects">服务项目</RouterLink>
        <RouterLink to="/support">服务支持</RouterLink>
        <RouterLink to="/clients">合作伙伴</RouterLink>
        <RouterLink to="/contact">联系我们</RouterLink>
      </nav>
      <div class="hotline">
        <span class="hotline-label">咨询热线</span>
        <a href="tel:075582104920">0755-8210 4920</a>
      </div>
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
