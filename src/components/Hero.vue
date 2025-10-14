<template>
  <section class="hero hero-bg ycw-hero">
    <div class="container">
      <h1>{{site.hero.title}}</h1>
      <p>{{site.hero.subtitle}}</p>
      <div class="hero-actions">
        <a class="btn btn-primary" href="#solutions">查看解决方案</a>
        <a class="btn btn-ghost" href="#contact">马上联系</a>
      </div>
      <ul style="list-style:none;display:flex;gap:26px;padding:18px 0 0;margin:0">
        <li v-for="s in site.hero.stats" :key="s.label" style="display:flex;flex-direction:column">
          <strong v-countup="s.value">0</strong>
          <span>{{s.label}}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { site } from '../content/site'
</script>

<style scoped>
.ycw-hero{background-image:radial-gradient(800px 300px at 30% -10%, rgba(46,125,255,.20), transparent 55%), url('/images/pdf/yuchuangwan_page-0001.jpg'); background-size:cover; background-position:center}
</style>
