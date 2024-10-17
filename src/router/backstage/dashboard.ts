const dashboardRoutes = [
  {
    path: '/backstage',
    component: () => import('@/views/layout/BackstageLayout.vue'),
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        meta: {
          gap: true
        }
      }
    ]
  }
]

export default dashboardRoutes
