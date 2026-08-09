import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/hethereau',
    },
    {
      path: '/hethereau',
      name: '海特洛市',
      component: () => import('../views/HethereauMap.vue'),
    },
    {
      path: '/bank',
      name: '粉爪大劫案',
      component: () => import('../views/BankMap.vue'),
    },
  ],
})

export default router
