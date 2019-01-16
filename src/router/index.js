import Vue from 'vue';
import Router from 'vue-router';
import routes from './router';
import store from 'src/store';
import { setToken, getToken } from 'src/lib/util';

Vue.use(Router);
const router = new Router({
  routes
});

// 路由守卫
router.beforeEach((to, from, next) => {
  const token = getToken();  // 获取token值
  if (token) {
      store.dispatch('authorization', token).then(() => {
      if (to.name === 'login') next({ name: 'app' });
      else next();
    }).catch(() => {
      setToken('');
      next({ name: 'login' });
    });
  } else {
    if (to.name === 'login') next();
    else next({ name: 'login' });
  }
});
export default router;
