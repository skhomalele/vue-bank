import { createRouter, createWebHistory } from 'vue-router'
import HomeApp from '../views/HomeApp.vue'
import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeApp,
    meta: {
      layout: 'main',
      auth: true,
    }
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import('../views/HelpApp.vue'),
    meta: {
      layout: 'main',
      auth: true,
    }
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('@/views/AuthApp'),
    meta: {
      layout: 'auth',
      auth: false,
    }
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
 const requareAuth = to.meta.auth

  if(requareAuth && store.getters['auth/isAuthenticated']) {
    next()
  } else if(requareAuth && !store.getters['auth/isAuthenticated']) {
    next('/auth?message=auth')
  } else {
    next()
  }
})

export default router
