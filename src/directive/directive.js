import Vue from 'vue';
import barchart from 'components/chart/barchart';
// 钩子函数的参数
const world = Vue.directive('world', {
  bind(el, binding) { // 常用！！
    console.log(binding); // bind 对象封装了指令的其它属性如 bind.name,指令的值bind.value等
  },
  inserted(vnode) {
    var Profile = Vue.extend(barchart);
    // 创建 Profile 实例，并挂载到一个元素上。
    new Profile().$mount('#mount-point');
  }
});

export {world};
