import Vue from 'vue';
import Router from 'vue-router';
import homerouter from './modules/homerouter.js';
import store1 from 'src/views/store';
Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   redirect: '/AppDesigner'
    // },
    {
      path: '/',
      component: store1
    },
    {
      path: '/AppDesigner',
      component: resolve => require(['components/AppDesigner'], resolve),
      redirect: '/AppDesigner/content',
      children: [
        ...homerouter
      ]
    }
  ]
});
