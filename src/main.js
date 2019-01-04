// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
// 引入路由
import router from './router';
// 引入vuex
import store from './store';
// 引入国际化
import i18n from './i18n';
// 引入mintui
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
// 引入uuid生成器
import uuid from 'uuid-js';
// 引入echarts
import echarts from 'echarts';
// 引入自定义组件(插件)
import webAppPlugin from 'components';
// 开发环境使用mock
if (process.env.NODE_ENV !== 'production') require('./mock');

Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;
Vue.prototype.$uuid = uuid;

Vue.use(Mint);
Vue.use(webAppPlugin);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
});
