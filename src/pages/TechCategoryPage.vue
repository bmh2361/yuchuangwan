<template>
  <div class="container category-wrap" v-reveal>
    <div class="breadcrumb"><RouterLink to="/tech">技术成果库</RouterLink> / <span>{{ title }}</span></div>
    <h1 class="cat-title">{{ title }}</h1>
    <p class="lead">此分类的示例占位。后续可在此展示筛选、最新技术成果列表、典型合作模式与对接入口。</p>
    <div class="placeholder-box">
      <p>（未来：技术卡片 / 检索过滤 / 收藏 / 需求提交表单 等模块。）</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'

const route = useRoute()
const slug = computed(()=> route.params.slug as string)

const slugTitleMap: Record<string,string> = {
  materials: '新材料',
  manufacturing: '智能制造',
  ai: '人工智能',
  green: '节能环保',
  bio: '生物健康',
  energy: '电子能源'
}

const title = computed(()=> slugTitleMap[slug.value] || slug.value)
</script>

<style scoped>
.category-wrap{padding:90px 0 120px}
.breadcrumb{font-size:12px;color:#5a6f8c;margin-bottom:18px;letter-spacing:.5px}
.breadcrumb a{color:#2e7dff;text-decoration:none}
.cat-title{margin:0 0 18px;font-size:42px;font-weight:800;letter-spacing:.5px;background:linear-gradient(95deg,#123153 0%,#2373c8 55%,#55beff 100%);-webkit-background-clip:text;color:transparent}
.lead{margin:0 0 34px;color:#34526a;font-size:15px;line-height:1.6;max-width:760px}
.placeholder-box{padding:60px 30px;border:1px dashed #b8ccdf;border-radius:18px;background:linear-gradient(180deg,rgba(255,255,255,.75),rgba(255,255,255,.55));backdrop-filter:blur(6px)}
</style>
