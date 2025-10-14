import { createRouter, createWebHashHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'home', component: () => import('./pages/Home.vue') },
    { path: '/services', name: 'services', component: () => import('./pages/SolutionsPage.vue') },
    { path: '/projects', name: 'projects', component: () => import('./pages/ProjectsPage.vue') },
    { path: '/about', name: 'about', component: () => import('./pages/AboutPage.vue') },
    { path: '/support', name: 'support', component: () => import('./pages/SupportPage.vue') },
    { path: '/clients', name: 'clients', component: () => import('./pages/ClientsPage.vue') },
    { path: '/contact', name: 'contact', component: () => import('./pages/ContactPage.vue') },
  ],
  scrollBehavior(){ return { top: 0 } }
})