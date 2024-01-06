import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/flights',
      name: 'flights',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/FlightsView.vue')
    },
    {
      path: '/book-now',
      name: 'booknow',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/BookingForm.vue')
    },
    {
      path: '/safaris',
      name: 'safaris',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/SafarisView.vue')
    },
    {
      path: '/balloon-safaris',
      name: 'balloon-safaris',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/safaris/balloon/BalloonSafari.vue')
    },
    {
      path: '/arusha-day-safari',
      name: 'arushadaysafari',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/safaris/daysafaris/ArushaDaySafari.vue')
    },
    {
      path: '/chemka-day-safari',
      name: 'chemkadaysafari',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/safaris/daysafaris/ChemkaDaySafari.vue')
    },
    {
      path: '/tarangire-day-safari',
      name: 'tarangiredaysafari',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/safaris/daysafaris/TarangireDaySafari.vue')
    },
    {
      path: '/day-safaris',
      name: 'daysafaris',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/safaris/daysafaris/DaySafari.vue')
    },
  ]
})

export default router
