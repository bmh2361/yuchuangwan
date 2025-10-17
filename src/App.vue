<template>
  <header class="site-header" id="top">
    <div class="container header-inner">
  <a class="logo" href="#top" :aria-label="t('brand.name')">
  <img src="/images/brand/logo1.png?v=1" :alt="t('brand.name')" style="height:34px;object-fit:contain;image-rendering:auto;" />
    <span style="font-weight:700;color:#0b234a">{{ t('brand.name') }}</span>
      </a>
      <nav class="nav">
        <RouterLink to="/">{{ t('nav.home') }}</RouterLink>
        <div class="nav-group has-sub">
          <span class="parent">{{ t('nav.about') }}</span>
          <div class="sub-menu">
            <RouterLink to="/industry-collab">产业合作</RouterLink>
            <RouterLink to="/success-cases">成功案例</RouterLink>
            <RouterLink to="/team">{{ t('nav.team') }}</RouterLink>
            <RouterLink to="/about-policy">{{ t('nav.policy') }}</RouterLink>
          </div>
        </div>
        <div class="nav-group has-sub">
          <span class="parent">{{ t('nav.services') }}</span>
          <div class="sub-menu">
            <RouterLink to="/tech">{{ t('nav.tech') }}</RouterLink>
            <RouterLink to="/fund">{{ t('nav.fund') }}</RouterLink>
            <RouterLink to="/services-coop">{{ t('nav.policyEdu') }}</RouterLink>
          </div>
        </div>
  <RouterLink to="/news">{{ t('nav.news') }}</RouterLink>
  <RouterLink to="/faq">常见问题</RouterLink>
  <RouterLink to="/contact">{{ t('nav.contact') }}</RouterLink>
      </nav>
      <div class="lang-switch" aria-label="Language Switcher">
        <button :class="{active: locale==='en'}" @click="setLocale('en')">EN</button>
        <span class="sep">/</span>
        <button :class="{active: locale==='zh'}" @click="setLocale('zh')">中文</button>
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
import { onMounted, onBeforeUnmount, computed } from 'vue'
import { useI18n } from './i18n'

const { setLocale, state, t } = useI18n()
const locale = computed(()=> state.locale)

onMounted(()=>{
  const header = document.querySelector('.site-header') as HTMLElement | null
  if(!header) return
  const onScroll = () => {
    if(window.scrollY > 24) header.classList.add('shrink')
    else header.classList.remove('shrink')
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
  // 下拉点击展开（触屏 & 桌面兜底）
  const parentLinks = Array.from(header.querySelectorAll('.nav-group > .parent')) as HTMLElement[]
  const closeAll = ()=> header.querySelectorAll('.nav-group.open').forEach(o=>o.classList.remove('open'))
  parentLinks.forEach(link=>{
    const wrapper = link.parentElement as HTMLElement
    if(!wrapper) return
    // 点击展开/折叠
    link.addEventListener('click', (e)=>{
      const hasSub = wrapper.querySelector('.sub-menu')
      if(hasSub){
        if(!wrapper.classList.contains('open')){
          e.preventDefault(); closeAll(); wrapper.classList.add('open')
        } else {
          // 第二次点击真正跳转（不阻止默认）并关闭
          wrapper.classList.remove('open')
        }
      }
    })
    // 悬停展开（桌面）
    let hoverTimer:number|undefined
    wrapper.addEventListener('pointerenter', ()=>{
      clearTimeout(hoverTimer); closeAll(); wrapper.classList.add('open')
    })
    wrapper.addEventListener('pointerleave', ()=>{
      hoverTimer = window.setTimeout(()=>{ wrapper.classList.remove('open') }, 140)
    })
  })
  // 点击空白关闭
  document.addEventListener('click', (ev)=>{
    const target = ev.target as HTMLElement
    if(!header.contains(target)){
      closeAll()
    }
  })
  onBeforeUnmount(()=> window.removeEventListener('scroll', onScroll))
})
</script>
