const projectsRoutes = [
  {
    path: '/projects',
    component: () => import('@/views/layout/BackstageLayout.vue'),
    children: [
      {
        path: '',
        name: 'Projects',
        component: () => import('@/views/projects/index.vue'),
        meta: {
          gap: true
        }
      }
    ]
  }
]

export default projectsRoutes
