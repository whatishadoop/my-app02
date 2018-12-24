import barchart from 'components/chart/barchart';
import tabbar from 'components/tabbar/tabbar';

export default {
  install: function (Vue) {
    // 插件注册
    Vue.component('barchart', barchart);
    Vue.component('tabbar', tabbar);
  }
};
