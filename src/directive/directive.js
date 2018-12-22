import Vue from 'vue';
import barChart from 'components/chart/barchart';
// 钩子函数的参数
const world = Vue.directive('world', {
  bind(el, binding) { // 常用！！
    console.log(binding.arg); // bind 对象封装了指令的其它属性如 bind.name,指令的值bind.value等
  },
  inserted(el, binding) {
    // let uid = binding.arg;
    // console.log(uid);
    /* eslint-disable no-unused-vars */
    console.log('====================');
    var Profile = Vue.extend(barChart);
    // 创建 Profile 实例，并挂载到一个元素上。
    console.log('====================');
    new Profile().$mount('#mount-point');
  }
});

export {world};
