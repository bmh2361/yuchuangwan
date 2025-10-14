<template>
  <section id="areas">
    <div class="container">
      <header class="section-header">
        <h2>服务领域</h2>
        <p>以企业需求为中心的全流程服务</p>
      </header>
      <div class="grid cols-4">
        <article class="card" v-tilt v-for="a in site.areas" :key="a.title">
          <h3>{{a.title}}</h3>
          <p>{{a.desc}}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { site } from '../content/site'
</script>
