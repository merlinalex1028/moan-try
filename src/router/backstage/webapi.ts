const webapiRoutes = [
  {
    path: '/webapi',
    component: () => import('@/views/layout/BackstageLayout.vue'),
    children: [
      {
        path: 'custom',
        component: () => import('@/views/web-api/CustomEvent/index.vue'),
        meta: {
          gap: true
        }
      }
    ]
  }
]

export default webapiRoutes
