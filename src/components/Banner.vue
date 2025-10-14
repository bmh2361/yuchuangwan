<template>
  <section id="about">
    <div class="container">
      <blockquote>{{site.banner.text}}</blockquote>
      <div style="display:flex;gap:12px">
        <a v-for="x in site.banner.links" :key="x" class="btn btn-ghost" href="#">{{x}}</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { site } from '../content/site'
</script>
