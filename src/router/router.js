import AppDesigner from 'views/AppDesigner';
import HomeRouter from './module/homerouter';
export default [
  {
    path: '/',
    name: 'login',
    component: resolve => require(['views/login.vue'], resolve)
  },
  {
    path: '/folder_tree',
    name: 'folder_tree',
    component: resolve => require(['components/folder-tree/folder-tree.vue'], resolve)
  },
  {
    path: '/AppDesigner',
    name: 'AppDesigner',
    component: AppDesigner,
    children: [
      ...HomeRouter
    ]
  },
  {
    path: '*',
    component: resolve => require(['views/error_404.vue'], resolve)
  },
  {
    path: '/app',
    name: 'app',
    component: resolve => require(['views/App.vue'], resolve)
  },
  {
    path: '/dev',
    name: 'dev',
    component: resolve => require(['views/Dev.vue'], resolve)
  },
  {
    path: '/manage',
    name: 'manage',
    component: resolve => require(['views/Manage.vue'], resolve)
  },
  {
    path: '/assemble',
    name: 'assemble',
    component: resolve => require(['views/Assemble.vue'], resolve)
  }
];
