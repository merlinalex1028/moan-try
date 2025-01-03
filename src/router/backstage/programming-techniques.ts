const programmingTechniquesRoutes = [
  {
    path: '/programming-techniques',
    component: () => import('@/views/layout/BackstageLayout.vue'),
    children: [
      {
        path: 'better-code',
        children: [
          {
            path: 'index',
            component: () => import('@/views/programming-techniques/better-code/index.vue'),
            meta: {
              gap: true
            }
          },
          {
            path: 'async-await',
            component: () => import('@/views/programming-techniques/better-code/async-await/index.vue'),
            meta: {
              gap: true
            }
          }
        ]
      }
    ]
  }
]

export default programmingTechniquesRoutes
