import Vue from 'vue';
import Router from 'vue-router';
import AppDesigner from 'src/components/AppDesigner';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppDesigner',
      component: AppDesigner
    }
  ]
});
