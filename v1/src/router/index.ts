import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'insertrecord',
      component: () => import('@/views/InsertRecord.vue')
    },
    {
      path: '/getrecord',
      name: 'getrecord',
      component: () => import('@/views/GetRecord.vue')
    },
    {
      path: '/editrecord',
      name: 'editrecord',
      component: () => import('@/views/EditRecord.vue')
    },
    {
      path: '/deleterecord',
      name: 'deleterecord',
      component: () => import('@/views/DeleteRecord.vue')
    },
  ]
})

export default router
