export default [
  {
    path: '/userInfo/:id',
    name: 'userInfo',
    component: () => import( /* webpackChunkName: "user" */ '@/views/user/userInfo.vue' ),
    props: true,  // 使用props 将组件和路由解耦
    meta: {
      title: '用户信息',
      // auth: true,
      keepAlive: true
    }
  }
]