<template>
  <div :cache="cache" ctype="barchart" obj="component">
    <div :id="chartid" :style="{width: '200px', height: '200px',border: '1px dashed #F00'}"></div>
    <div>组件ID: {{id}}</div>
    <button @click="test(id)">交互测试</button>
    <div>交互数据: {{data}}</div>
    对象ID: <input v-model="iddata"/>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'Welcome 222',
        chartid: this.$uuid.create().hex,
        cache: '',
        data: '000',
        iddata: '',
        executejs: ''
      };
    },
    props: ['id'],  // 框架传入
    mounted() {
      this.drawLine();
      // console.log(this.$data.chartid);
      let newObj = {};
      newObj.msg = this.$data.msg;
      newObj.chartid = this.$data.chartid;
      this.$data.cache = JSON.stringify(newObj);
      // console.log(this.$data.cache);
    },
    methods: {
      test(aaa) {
        this.executejs = 'var obj = window.' + 'C3f1b59d18bd443588683381862cdb488' + ';obj.test2("' + this.id + '")';
        var foo = window;
        console.log(foo.eval(this.executejs));
         // window.C4375ce51a16242cf88dbfee89dfcd347.test2('aaaaa');
      },
      test2(aaa) {
        // alert(this.id);
        this.data = aaa;
      },
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('' + this.$data.chartid));
        // 绘制图表
        myChart.setOption({
          title: {text: '在Vue中使用echarts'},
          tooltip: {},
          xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        });
      }
    }
  };
</script>

<style scoped>

</style>
