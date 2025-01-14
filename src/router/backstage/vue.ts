const vueRoutes = [
  {
    path: '/vue',
    component: () => import('@/views/layout/BackstageLayout.vue'),
    children: [
      {
        path: 'reactivity-principle',
        name: 'ReactivityPrinciple',
        component: () => import('@/views/vue/index.vue'),
        meta: {
          gap: true
        }
      }
    ]
  }
]

export default vueRoutes
