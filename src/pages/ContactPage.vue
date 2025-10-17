<template>
  <section class="contact-page container" v-reveal>
    <header class="c-hero">
      <h1>联系我们 <span class="en">Contact</span></h1>
      <p>留下信息，我们的团队将尽快与您联系；也欢迎通过下方渠道直接沟通。</p>
    </header>

    <div class="grid">
      <!-- 表单卡片 -->
      <form class="form-card" @submit.prevent="onSubmit">
        <h3>合作与咨询</h3>
        <div class="row">
          <div class="field">
            <label>姓名 <span class="req">*</span></label>
            <input v-model="form.name" required class="input" placeholder="请输入您的姓名" />
          </div>
          <div class="field">
            <label>电话 <span class="req">*</span></label>
            <input v-model="form.phone" required class="input" placeholder="请输入联系电话" />
          </div>
        </div>
        <div class="row">
          <div class="field">
            <label>邮箱</label>
            <input v-model="form.email" type="email" class="input" placeholder="可选：方便我们进一步沟通" />
          </div>
          <div class="field">
            <label>公司</label>
            <input v-model="form.company" class="input" placeholder="请输入公司名称" />
          </div>
        </div>
        <div class="row full">
          <div class="field">
            <label>需求/想法</label>
            <textarea v-model="form.message" class="input" rows="5" placeholder="简单描述您的需求、合作方向或想法"></textarea>
          </div>
        </div>
        <div class="actions">
          <button class="btn primary" type="submit">提交信息</button>
          <span class="hint">提交后会显示成功提示（当前为占位交互）</span>
        </div>
      </form>

      <!-- 关于信息卡片 -->
      <aside class="info-card" v-tilt>
        <h3>关于育创湾 <span class="en">VisionTech Bay</span></h3>
        <ul class="info-list">
          <li>
            <div class="k">地址</div>
            <div class="v">中国上海市 XX 路 XX 号；英国伦敦 XX 街区 XX 号（占位）</div>
          </li>
          <li>
            <div class="k">电话（中国）</div>
            <div class="v">+86 000-0000-0000（占位）</div>
          </li>
          <li>
            <div class="k">电话（英国）</div>
            <div class="v">+44 0000-000-000（占位）</div>
          </li>
          <li>
            <div class="k">官方邮箱</div>
            <div class="v">contact@visiontechbay.com（占位）</div>
          </li>
          <li>
            <div class="k">小红书</div>
            <div class="v">@visiontechbay_official（占位）</div>
          </li>
          <li>
            <div class="k">WhatsApp</div>
            <div class="v">+44 0000-000-000（占位）</div>
          </li>
          <li>
            <div class="k">微信</div>
            <div class="v">visiontechbay（占位）</div>
          </li>
          <li>
            <div class="k">LinkedIn</div>
            <div class="v">linkedin.com/company/visiontechbay（占位）</div>
          </li>
        </ul>
        <div class="quick">
          <RouterLink class="btn ghost" :to="{ name: 'industry-collab' }">去产业合作页</RouterLink>
          <RouterLink class="btn ghost" :to="{ name: 'services-coop' }">去企业/高校合作页</RouterLink>
        </div>
      </aside>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive({ name: '', phone: '', email: '', company: '', message: '' })

function onSubmit(){
  // 暂用前端模拟提交
  alert('已收到信息（占位交互），我们会尽快联系您。')
  form.name = ''
  form.phone = ''
  form.email = ''
  form.company = ''
  form.message = ''
}
</script>

<style scoped>
.contact-page{padding:34px 0 80px}
.c-hero{text-align:center;margin-bottom:18px}
.c-hero h1{margin:0 0 8px;font-size:clamp(28px,4.6vw,38px);font-weight:800;letter-spacing:.3px;color:#0a2a47}
.c-hero h1 .en{margin-left:8px;font-size:14px;color:#2a64a2}
.c-hero p{margin:0;color:#34526a}

.grid{display:grid;gap:18px;grid-template-columns:1fr}
@media (min-width:1024px){.grid{grid-template-columns:1.2fr .8fr}}

.form-card,.info-card{position:relative;padding:16px;border:1px solid rgba(90,140,175,.65);border-radius:16px;background:linear-gradient(170deg,rgba(255,255,255,.96),rgba(242,247,252,.92));box-shadow:0 10px 24px -14px rgba(18,54,95,.22)}
.form-card h3,.info-card h3{margin:0 0 10px;color:#0a2a4a}

.row{display:grid;gap:12px;grid-template-columns:1fr 1fr}
.row.full{grid-template-columns:1fr}
@media (max-width:720px){.row{grid-template-columns:1fr}}

.field label{display:block;margin:0 0 6px;color:#114066;font-weight:700}
.req{color:#ea4b4b;margin-left:4px}
.input{width:100%;padding:10px 12px;border-radius:12px;border:1px solid rgba(140,170,200,.45);background:#fff;outline:none}
.input:focus{border-color:#2e7dff;box-shadow:0 0 0 3px rgba(46,125,255,.14)}
textarea.input{resize:vertical}

.actions{display:flex;align-items:center;gap:10px}
.hint{font-size:12px;color:#577692}
.btn{display:inline-flex;align-items:center;justify-content:center;height:36px;padding:0 14px;border-radius:999px;border:1px solid rgba(46,125,255,.45);font-weight:700;letter-spacing:.2px;text-decoration:none}
.btn.primary{color:#0e2a56;background:linear-gradient(180deg,#d9e9ff,#bcd7ff)}
.btn.primary:hover{filter:brightness(1.02)}
.btn.ghost{color:#1a4b8f;background:linear-gradient(160deg,rgba(255,255,255,.85),rgba(255,255,255,.65))}
.btn.ghost:hover{background:linear-gradient(160deg,rgba(255,255,255,.95),rgba(255,255,255,.75))}

.info-list{list-style:none;margin:0;padding:0;display:grid;gap:10px}
.info-list li{display:grid;grid-template-columns:100px 1fr;gap:10px;align-items:start}
.info-list .k{color:#0a2a4a;font-weight:800}
.info-list .v{color:#114066}
.quick{display:flex;gap:10px;margin-top:12px;flex-wrap:wrap}
</style>
