export default {
  install: function (Vue) {
    // 全局注册异步组件
    Vue.component('barchart', resolve => require(['components/chart/barchart'], resolve));
    Vue.component('tabbar', resolve => require(['components/tabbar/tabbar'], resolve));
  }
};
