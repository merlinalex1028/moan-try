const tasksRoutes = [

  {
    path: '/tasks',
    component: () => import('@/views/layout/BackstageLayout.vue'),
    children: [
      {
        path: '',
        name: 'Tasks',
        component: () => import('@/views/tasks/index.vue'),
        meta: {
          gap: true
        }
      }
    ]
  }
]

export default tasksRoutes
