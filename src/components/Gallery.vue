<script setup lang="ts">
import { ref } from 'vue'
import { pdfPages } from '../content/pdf'
const pages = pdfPages
const show = ref(false)
const active = ref<string|null>(null)
function open(src:string){ active.value = src; show.value = true }
function close(){ show.value = false; active.value = null }
</script>

<template>
  <section id="what-we-do">
    <div class="container">
      <header class="section-header">
        <h2>我们在做什么</h2>
        <p>基于你提供的 PDF 内容，提炼业务能力、方案与案例，以图文方式完整呈现。</p>
      </header>
      <div class="gallery-grid">
        <figure v-for="src in pages" :key="src" class="shot card" v-reveal v-tilt @click="open(src)">
          <img :src="src" alt="PDF 页面预览" loading="lazy" />
        </figure>
      </div>
      <p class="tip">提示：将你导出的 JPG 复制到 <code>public/images/pdf/</code> 下，命名为 yuchuangwan_page-0001.jpg ... 即可自动展示。</p>
    </div>
    <!-- 预览 -->
    <div v-if="show" class="lightbox" @click.self="close">
      <img :src="active!" alt="预览大图" />
      <button class="lb-close" @click="close" aria-label="关闭预览">×</button>
    </div>
  </section>
</template>

<style scoped>
.gallery-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.shot{padding:0;overflow:hidden;cursor:pointer}
.shot img{width:100%;height:260px;object-fit:cover;display:block}
.tip{color:var(--muted);margin-top:12px}
.lightbox{position:fixed;inset:0;background:rgba(0,10,30,.6);backdrop-filter:blur(4px);display:grid;place-items:center;z-index:1200}
.lightbox img{max-width:92vw;max-height:88vh;box-shadow:0 20px 60px rgba(0,0,0,.5);border-radius:10px}
.lb-close{position:absolute;top:20px;right:20px;width:40px;height:40px;border-radius:50%;border:0;background:#fff;color:#123;cursor:pointer;font-size:20px;box-shadow:var(--shadow)}
@media (max-width:1024px){.gallery-grid{grid-template-columns:repeat(2,1fr)}}
@media (max-width:640px){.gallery-grid{grid-template-columns:1fr}.shot img{height:200px}}
</style>