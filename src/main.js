// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import i18n from 'common/i18n/index.js';
// 引入mintui
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import MyPlugin from 'components';
/* eslint-disable no-unused-vars */
import uuid from 'uuid-js';
/* eslint-disable no-unused-vars */
import world from './directive/directive.js';
// 引入echarts
import echarts from 'echarts';

Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;
Vue.prototype.$uuid = uuid;

Vue.use(Mint);
Vue.use(MyPlugin);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  render: h => h(App)
});
