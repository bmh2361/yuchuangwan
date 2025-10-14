<template>
  <section class="container" v-reveal>
    <h1>团队成员</h1>
    <p>这里将展示核心管理团队 / 技术专家 / 顾问委员会简介，支持头像、姓名、职务、领域标签。</p>
    <div class="team-grid">
      <div class="member" v-for="m in demo" :key="m.name">
        <div class="avatar" :style="{backgroundImage:`url(${m.avatar})`}"></div>
        <h3>{{ m.name }}</h3>
        <p class="role">{{ m.role }}</p>
        <p class="desc">{{ m.desc }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Member { name:string; role:string; desc:string; avatar:string }
const demo:Member[] = [
  { name:'张三', role:'CEO / 联合创始人', desc:'负责平台战略规划与产业协同推进。', avatar:'https://via.placeholder.com/140x140.png?text=Z' },
  { name:'李四', role:'CTO', desc:'主导技术架构与数据智能方向。', avatar:'https://via.placeholder.com/140x140.png?text=L' },
  { name:'王五', role:'成果转化总监', desc:'对接高校成果并设计转化路径。', avatar:'https://via.placeholder.com/140x140.png?text=W' },
]
</script>

<style scoped>
.team-grid{margin-top:38px;display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:30px}
.member{background:linear-gradient(160deg,rgba(255,255,255,.92),rgba(240,248,255,.90));border:1px solid rgba(170,200,228,.65);border-radius:20px;padding:22px 20px 26px;backdrop-filter:blur(8px) saturate(160%);box-shadow:0 8px 28px -12px rgba(36,82,140,.25),0 4px 14px -6px rgba(36,82,140,.18);transition:transform .35s ease, box-shadow .35s ease}
.member:hover{transform:translateY(-6px);box-shadow:0 16px 44px -16px rgba(36,82,140,.35),0 8px 26px -10px rgba(36,82,140,.22)}
.avatar{width:96px;height:96px;border-radius:50%;background:#d2e4f5 center/cover no-repeat;margin-bottom:16px;filter:drop-shadow(0 4px 10px rgba(40,100,170,.25))}
.member h3{margin:0 0 6px;font-size:18px;font-weight:600;color:#0c2d4f;letter-spacing:.4px}
.role{margin:0 0 10px;font-size:13px;letter-spacing:.5px;color:#1d4b7a;text-transform:uppercase;opacity:.85}
.desc{margin:0;font-size:13px;line-height:1.55;color:#2d567a}
@media (max-width:640px){.team-grid{grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:22px}.member{padding:18px 16px 22px}}
</style>
