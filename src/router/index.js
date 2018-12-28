import Vue from 'vue';
import Router from 'vue-router';
import AppDesigner from 'views/AppDesigner';
import HomeRouter from './module/homerouter.js';
import StoreTest from 'src/views/store';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/AppDesigner'
    },
    {
      path: '/AppDesigner/StoreTest',
      component: StoreTest
    },
    {
      path: '/AppDesigner',
      component: AppDesigner,
      children: [
        ...HomeRouter
      ]
    }
  ]
});
