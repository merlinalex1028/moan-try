import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

// backstage routes
const backstageModules = import.meta.glob('./backstage/**/*.ts', { eager: true })
let backstageRoutesList: Readonly<RouteRecordRaw[]> = []
Object.keys(backstageModules).forEach((key: string) => {
  const layoutData: any = backstageModules[key]
  const layoutArray = layoutData.default || []
  backstageRoutesList = backstageRoutesList.concat(layoutArray)
})

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/home/index.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/login/index.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/login/index.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/404/index.vue')
    },
    ...backstageRoutesList
  ]
})

export default router
