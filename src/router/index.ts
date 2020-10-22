import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/qrscanner'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: 'qrscanner'
      },
      {
        path: 'qrscanner',
        name: 'qrscanner',
        component: () => import('@/views/QRScanner.vue')
      },
      {
       path: 'barcodescanner',
       name: 'barcodescanner',
       component: () => import('@/views/BarcodeScanner.vue')
     },
     {
      path: 'camera',
      name: 'camera',
      component: () => import('@/views/Camera.vue')
    }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
