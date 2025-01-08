const buildToolRoutes = [
  {
    path: '/build-tool',
    component: () => import('@/views/layout/BackstageLayout.vue'),
    children: [
      {
        path: 'vite-basic',
        name: 'ViteBasic',
        component: () => import('@/views/vite/index.vue'),
        meta: {
          gap: true
        }
      }
    ]
  }
]

export default buildToolRoutes
