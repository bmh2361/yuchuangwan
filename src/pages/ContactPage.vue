<template>
  <section class="container">
    <header class="section-header"><h2>联系我们</h2></header>
    <form class="card" style="display:grid;gap:12px;max-width:560px">
      <label>姓名<input required class="input" placeholder="请输入您的姓名"/></label>
      <label>电话<input required class="input" placeholder="请输入联系电话"/></label>
      <label>公司<input class="input" placeholder="请输入公司名称"/></label>
      <label>需求<textarea class="input" rows="4" placeholder="简单描述您的需求"></textarea></label>
      <button class="btn btn-primary" type="button" onclick="alert('已收到，我们会尽快联系您。')">提交</button>
    </form>
  </section>
</template>
