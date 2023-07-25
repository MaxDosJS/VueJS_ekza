export default [
  {
    name: 'HomePage',
    path: '/',
    component: () => import('@/views/HomePage.vue')
  },
  {
    name: 'Users',
    path: '/users',
    component: () => import('@/views/Users.vue')
  },
  {
    name: 'UserId',
    path: '/user/:id',
    props: true,
    component: () => import('@/views/UserId/UserId.vue')
  },
  {
    name: 'lessons',
    path: '/lessons',
    component: () => import('@/views/Lessons.vue')
  },
  {
    name: 'LessonsAdd',
    path: '/lessons/add',
    component: () => import('@/views/LessonsAdd/lessonsAdd.vue')
  },
]
