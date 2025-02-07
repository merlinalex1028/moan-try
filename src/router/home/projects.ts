const projectsRoutes = [
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('@/views/projects/index.vue')
  }
]

export default projectsRoutes
