import { createRouter, createWebHashHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'home', component: () => import('./pages/Home.vue') },
    // 主页面“关于我们”“服务体系”移除，仅保留子页面入口
    { path: '/tech', name: 'tech', component: () => import('./pages/TechPage.vue') },
  { path: '/tech/category/:slug', name: 'tech-category', component: () => import('./pages/TechCategoryPage.vue') },
      { path: '/industry-collab', name: 'industry-collab', component: () => import('./pages/IndustryCollabPage.vue') },
      { path: '/success-cases', name: 'success-cases', component: () => import('./pages/SuccessCasesPage.vue') },
  { path: '/team', name: 'team', component: () => import('./pages/TeamPage.vue') },
    { path: '/fund', name: 'fund', component: () => import('./pages/FundPage.vue') },
    { path: '/news', name: 'news', component: () => import('./pages/NewsPage.vue') },
    { path: '/about-policy', name: 'about-policy', component: () => import('./pages/AboutPolicyPage.vue') },
    { path: '/services-coop', name: 'services-coop', component: () => import('./pages/ServicesCoopPage.vue') },
  { path: '/faq', name: 'faq', component: () => import('./pages/FaqPage.vue') },
    { path: '/contact', name: 'contact', component: () => import('./pages/ContactPage.vue') },
  ],
  scrollBehavior(){ return { top: 0 } }
})