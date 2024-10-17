const dashboardRoutes = [
  {
    path: '/documents',
    component: () => import('@/views/layout/BackstageLayout.vue'),
    children: [
      {
        path: 'button',
        component: () => import('@/views/documents/button/index.vue'),
        meta: {
          gap: true
        }
      }
    ]
  }
]

export default dashboardRoutes
