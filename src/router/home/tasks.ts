const tasksRoutes = [
  {
    path: '/tasks',
    name: 'Tasks',
    component: () => import('@/views/tasks/index.vue')
  }
]

export default tasksRoutes
