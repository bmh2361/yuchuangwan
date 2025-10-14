<script setup lang="ts">
import { site } from '../content/site'
const data = site.news
</script>
<template>
  <section id="news">
    <div class="container">
      <header class="section-header"><h2>新闻资讯</h2></header>
      <div class="news">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:18px">
          <article v-for="n in data" :key="n.title" class="card">
            <div style="padding:14px">
              <h4 style="margin:0 0 6px">{{n.title}}</h4>
              <div style="opacity:.75;font-size:12px">{{n.tag}} · {{n.date}}</div>
            </div>
          </article>
        </div>
        <aside style="display:flex;flex-direction:column;gap:12px">
          <a v-for="n in data" :key="n.title" class="btn btn-ghost" href="#">{{n.title}}</a>
        </aside>
      </div>
    </div>
  </section>
</template>
