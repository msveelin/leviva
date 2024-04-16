import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import adminRouter from '@/views/admin/adminRouter.js'

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
      path: '/thank-you',
      name: 'thankyou',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ThankYou.vue')
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
      path: '/package-details/:uUid',
      name: 'package',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/PackageView.vue')
    },
    {
      path: '/destination-details/:uUid',
      name: 'destination',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/DestinationView.vue')
    },
    ...adminRouter
  ]
})

export default router
