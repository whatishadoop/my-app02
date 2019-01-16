import Vue from 'vue';
import App from './App';
// 引入路由
import router from './router';
// 引入vuex
import store from './store';
//  引入总线
import Bus from './lib/bus';
// 引入国际化
import i18n from './i18n';
// 引入mintui
import './plugins/mintui.js';
// 引入iview
import './plugins/iview.js';
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
Vue.prototype.$bus = Bus;

Vue.use(webAppPlugin);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
});
