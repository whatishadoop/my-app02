export default {
  install: function (Vue) {
    // 全局异步注册组件
    Vue.component('barchart', resolve => require(['components/chart/barchart'], resolve));
    Vue.component('tabbar', resolve => require(['components/tabbar/tabbar'], resolve));
    Vue.component('dev-article', resolve => require(['components/dev-article'], resolve));

    // 全局异步注册配置组件
    Vue.component('barchartconfig', resolve => require(['components/chart/barchartconfig'], resolve));
    Vue.component('barchartconfig02', resolve => require(['components/chart/barchartconfig02'], resolve));
  }
};
