<template>
  <footer class="footer-lite">
    <div class="container footer-inner">
      <p class="copyright">{{ t('footer.copyright') }}</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { t } from '../i18n'
</script>

<style scoped>
.footer-lite{padding:34px 0 44px;background:linear-gradient(180deg,rgba(255,255,255,.85),rgba(255,255,255,.78));backdrop-filter:saturate(160%) blur(10px);border-top:1px solid #dbe4f2;position:relative}
.footer-lite:before{content:'';position:absolute;inset:0;background:radial-gradient(800px 260px at 30% -40%,rgba(110,185,255,.22),rgba(110,185,255,0) 70%);pointer-events:none;opacity:.85}
.footer-inner{display:flex;justify-content:center;align-items:center}
.copyright{margin:0;font-size:12px;letter-spacing:.5px;color:#5a6f8c}
@media (prefers-color-scheme: dark){.footer-lite{background:linear-gradient(180deg,rgba(255,255,255,.12),rgba(255,255,255,.08));backdrop-filter:blur(14px);}.copyright{color:#94aec4}}
</style>
