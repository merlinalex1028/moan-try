const dockerRoutes = [
  {
    path: '/docker',
    component: () => import('@/views/layout/BackstageLayout.vue'),
    children: [
      {
        path: 'basic',
        name: 'DockerBasic',
        component: () => import('@/views/docker/index.vue'),
        meta: {
          gap: true
        }
      }
    ]
  }
]

export default dockerRoutes
