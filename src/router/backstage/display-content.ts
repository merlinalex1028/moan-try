const displayContentRoutes = [
  {
    path: '/display-content',
    component: () => import('@/views/layout/BackstageLayout.vue'),
    children: [
      {
        path: 'emoji',
        component: () => import('@/views/display-content/emoji.vue'),
        meta: {
          gap: true
        }
      }
    ]
  }
]

export default displayContentRoutes
