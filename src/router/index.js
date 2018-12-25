import Vue from 'vue';
import Router from 'vue-router';
import AppDesigner from 'components/AppDesigner';
import homerouter from './modules/homerouter.js';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/AppDesigner'
    },
    {
      path: '/AppDesigner',
      component: AppDesigner,
      redirect: '/AppDesigner/content',
      children: [
        ...homerouter
      ]
    }
  ]
});
