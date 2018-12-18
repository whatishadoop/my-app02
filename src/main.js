// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

// import './assets/bootstrap-3.3.6-dist/css/bootstrap.min.css'
// import './assets/bootstrap-3.3.6-dist/css/layoutit.css'
// import './assets/bootstrap-3.3.6-dist/js/bootstrap.min.js'

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});