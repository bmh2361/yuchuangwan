<template>
  <header class="site-header" id="top">
    <div class="container header-inner">
  <a class="logo" href="#top" :aria-label="t('brand.name')">
  <img src="/images/brand/logo1.png?v=1" :alt="t('brand.name')" style="height:34px;object-fit:contain;image-rendering:auto;" />
    <span style="font-weight:700;color:#0b234a">{{ t('brand.name') }}</span>
      </a>
      <nav class="nav" role="navigation" aria-label="Primary">
        <RouterLink to="/">{{ t('nav.home') }}</RouterLink>
        <div class="nav-group has-sub">
          <span class="parent" tabindex="0" role="button" aria-haspopup="true" aria-expanded="false">{{ t('nav.about') }}</span>
          <div class="sub-menu">
            <RouterLink to="/industry-collab">产业合作</RouterLink>
            <RouterLink to="/success-cases">成功案例</RouterLink>
            <RouterLink to="/team">{{ t('nav.team') }}</RouterLink>
            <RouterLink to="/about-policy">{{ t('nav.policy') }}</RouterLink>
          </div>
        </div>
        <div class="nav-group has-sub">
          <span class="parent" tabindex="0" role="button" aria-haspopup="true" aria-expanded="false">{{ t('nav.services') }}</span>
          <div class="sub-menu">
            <RouterLink to="/tech">{{ t('nav.tech') }}</RouterLink>
            <RouterLink to="/fund">{{ t('nav.fund') }}</RouterLink>
            <RouterLink to="/services-coop">{{ t('nav.policyEdu') }}</RouterLink>
          </div>
        </div>
  <RouterLink to="/news">{{ t('nav.news') }}</RouterLink>
  <RouterLink to="/faq">{{ t('nav.faq') }}</RouterLink>
  <RouterLink to="/contact">{{ t('nav.contact') }}</RouterLink>
      </nav>
      <!-- Mobile hamburger -->
      <button class="hamburger" aria-label="Open menu" aria-controls="drawer" :aria-expanded="isDrawerOpen? 'true':'false'" @click="toggleDrawer" />
      <div class="lang-switch" aria-label="Language Switcher">
        <button :class="{active: locale==='en'}" @click="setLocale('en')">EN</button>
        <span class="sep">/</span>
        <button :class="{active: locale==='zh'}" @click="setLocale('zh')">中文</button>
      </div>
    </div>
  </header>
  <!-- Drawer overlay & panel (mobile) -->
  <div class="drawer-mask" v-if="isDrawerOpen" @click="closeDrawer" aria-hidden="true"></div>
  <aside id="drawer" class="drawer" :class="{open:isDrawerOpen}" aria-label="Mobile Menu" v-if="true">
    <div class="drawer-header">
      <span class="brand">{{ t('brand.name') }}</span>
      <button class="drawer-close" aria-label="Close menu" @click="closeDrawer">×</button>
    </div>
    <nav class="drawer-nav">
      <RouterLink to="/" class="d-home" @click="closeDrawer">{{ t('nav.home') }}</RouterLink>

      <div class="d-section">
        <div class="d-title">
          <span class="d-ico" aria-hidden="true">🏢</span>
          <span>{{ t('nav.about') }}</span>
          <button class="d-toggle" :aria-expanded="openAbout?'true':'false'" @click="openAbout=!openAbout" aria-label="Toggle About"></button>
        </div>
        <div class="d-sub" v-show="openAbout">
          <RouterLink to="/industry-collab" @click="closeDrawer">{{ t('nav.industryCollab') }}</RouterLink>
          <RouterLink to="/success-cases" @click="closeDrawer">{{ t('nav.successCases') }}</RouterLink>
          <RouterLink to="/team" @click="closeDrawer">{{ t('nav.team') }}</RouterLink>
          <RouterLink to="/about-policy" @click="closeDrawer">{{ t('nav.policy') }}</RouterLink>
        </div>
      </div>

      <div class="d-section">
        <div class="d-title">
          <span class="d-ico" aria-hidden="true">🧩</span>
          <span>{{ t('nav.services') }}</span>
          <button class="d-toggle" :aria-expanded="openServices?'true':'false'" @click="openServices=!openServices" aria-label="Toggle Services"></button>
        </div>
        <div class="d-sub" v-show="openServices">
          <RouterLink to="/tech" @click="closeDrawer">{{ t('nav.tech') }}</RouterLink>
          <RouterLink to="/fund" @click="closeDrawer">{{ t('nav.fund') }}</RouterLink>
          <RouterLink to="/services-coop" @click="closeDrawer">{{ t('nav.policyEdu') }}</RouterLink>
        </div>
      </div>

      <div class="d-section">
        <div class="d-title no-toggle">
          <span class="d-ico" aria-hidden="true">📌</span>
          <span>{{ t('nav.more') }}</span>
        </div>
        <div class="d-sub show">
          <RouterLink to="/news" @click="closeDrawer">{{ t('nav.news') }}</RouterLink>
          <RouterLink to="/faq" @click="closeDrawer">{{ t('nav.faq') }}</RouterLink>
          <RouterLink to="/contact" @click="closeDrawer">{{ t('nav.contact') }}</RouterLink>
        </div>
      </div>
    </nav>
    <div class="drawer-lang" role="group" aria-label="Language">
      <div class="seg" role="tablist">
        <button class="seg-item" role="tab" :aria-selected="locale==='zh' ? 'true' : 'false'" :class="{active: locale==='zh'}" @click="setLocale('zh'); closeDrawer()">中文</button>
        <button class="seg-item" role="tab" :aria-selected="locale==='en' ? 'true' : 'false'" :class="{active: locale==='en'}" @click="setLocale('en'); closeDrawer()">EN</button>
      </div>
    </div>
  </aside>
  <main>
    <RouterView />
  </main>
  <Footer />
</template>

<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router'
import Footer from './components/Footer.vue'
import { onMounted, onBeforeUnmount, computed, ref, watch } from 'vue'
import { useI18n } from './i18n'

const { setLocale, state, t } = useI18n()
const locale = computed(()=> state.locale)
const router = useRouter()

const isDrawerOpen = ref(false)
const openAbout = ref(false)
const openServices = ref(false)

function openDrawer(){
  isDrawerOpen.value = true
  document.body.classList.add('drawer-open')
  document.body.style.overflow = 'hidden'
  // 打开时默认展开所有分组
  openAbout.value = true
  openServices.value = true
}
function closeDrawer(){
  isDrawerOpen.value = false
  document.body.classList.remove('drawer-open')
  document.body.style.overflow = ''
}
function toggleDrawer(){ isDrawerOpen.value ? closeDrawer() : openDrawer() }

onMounted(()=>{
  const header = document.querySelector('.site-header') as HTMLElement | null
  if(!header) return
  const onScroll = () => {
    if(window.scrollY > 24) header.classList.add('shrink')
    else header.classList.remove('shrink')
    // 手机端：滚动时淡出大标题 + 隐藏头部（需回到顶部才能操作）
    if(window.innerWidth <= 768){
      const atTop = window.scrollY <= 2
      if(!atTop && !isDrawerOpen.value){
        header.classList.add('header-hidden')
        document.body.classList.add('scrolling')
      } else {
        header.classList.remove('header-hidden')
        if(atTop) document.body.classList.remove('scrolling')
      }
    }
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
          link.setAttribute('aria-expanded','true')
        } else {
          // 第二次点击真正跳转（不阻止默认）并关闭
          wrapper.classList.remove('open')
          link.setAttribute('aria-expanded','false')
        }
      }
    })
    // 键盘可达：Enter/Space 打开
    link.addEventListener('keydown',(ev:KeyboardEvent)=>{
      if(ev.key==='Enter' || ev.key===' '){ ev.preventDefault(); link.click() }
    })
    // 悬停展开（桌面）
    let hoverTimer:number|undefined
    wrapper.addEventListener('pointerenter', ()=>{
      clearTimeout(hoverTimer); closeAll(); wrapper.classList.add('open')
      link.setAttribute('aria-expanded','true')
    })
    wrapper.addEventListener('pointerleave', ()=>{
      hoverTimer = window.setTimeout(()=>{ wrapper.classList.remove('open'); link.setAttribute('aria-expanded','false') }, 140)
    })
  })
  // 点击空白关闭
  document.addEventListener('click', (ev)=>{
    const target = ev.target as HTMLElement
    if(!header.contains(target)){
      closeAll()
    }
  })
  // Esc 关闭抽屉
  const onKeydown = (ev: KeyboardEvent)=>{ if(ev.key==='Escape' && isDrawerOpen.value) closeDrawer() }
  document.addEventListener('keydown', onKeydown)
  onBeforeUnmount(()=> {
    window.removeEventListener('scroll', onScroll)
    document.removeEventListener('keydown', onKeydown)
  })
})

// 路由变化时自动关闭抽屉
watch(()=>router.currentRoute.value.fullPath, ()=>{
  if(isDrawerOpen.value) closeDrawer()
})
</script>
