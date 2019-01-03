import AppDesigner from 'views/AppDesigner';
import HomeRouter from './module/homerouter';
export default [
  {
    path: '/login',
    name: 'login',
    component: resolve => require(['views/login.vue'], resolve)
  },
  {
    path: '/',
    name: 'AppDesigner',
    component: AppDesigner,
    children: [
      ...HomeRouter
    ]
  },
  {
    path: '*',
    component: resolve => require(['views/error_404.vue'], resolve)
  }
];
