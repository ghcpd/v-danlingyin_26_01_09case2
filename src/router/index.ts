import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/HomePage.vue'),
    meta: {
      title: 'Home - AI Portal'
    }
  },
  {
    path: '/chat',
    name: 'Chat',
    component: () => import('@/pages/ChatPage.vue'),
    meta: {
      title: 'Chat - AI Portal'
    }
  },
  {
    path: '/history',
    name: 'History',
    component: () => import('@/pages/HistoryPage.vue'),
    meta: {
      title: 'Conversation History - AI Portal'
    }
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('@/pages/SettingsPage.vue'),
    meta: {
      title: 'Settings - AI Portal'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, _from, next) => {
  // Update document title
  const title = (to.meta.title as string) || 'AI Portal'
  document.title = title
  next()
})

export default router
