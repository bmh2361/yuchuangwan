import { createRouter, createWebHashHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'home', component: () => import('./pages/Home.vue') },
    { path: '/about', name: 'about', component: () => import('./pages/AboutPage.vue') },
    { path: '/services', name: 'services', component: () => import('./pages/SolutionsPage.vue') },
    { path: '/tech', name: 'tech', component: () => import('./pages/TechPage.vue') },
  { path: '/tech/category/:slug', name: 'tech-category', component: () => import('./pages/TechCategoryPage.vue') },
    { path: '/cases', name: 'cases', component: () => import('./pages/CasesPage.vue') },
  { path: '/team', name: 'team', component: () => import('./pages/TeamPage.vue') },
    { path: '/fund', name: 'fund', component: () => import('./pages/FundPage.vue') },
    { path: '/news', name: 'news', component: () => import('./pages/NewsPage.vue') },
    { path: '/policy', name: 'policy', component: () => import('./pages/PolicyPage.vue') },
    { path: '/contact', name: 'contact', component: () => import('./pages/ContactPage.vue') },
  ],
  scrollBehavior(){ return { top: 0 } }
})