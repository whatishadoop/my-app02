<template>
  <div :cache="cache" ctype="barchart" obj="component">
    <div :id="chartid" :style="{width: '200px', height: '200px',border: '1px dashed #F00'}"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'Welcome 222',
        chartid: this.$uuid.create().hex,
        cache: ''
      };
    },
    mounted() {
      this.drawLine();
      console.log(this.$data.chartid);
      let newObj = {};
      newObj.msg = this.$data.msg;
      newObj.chartid = this.$data.chartid;
      this.$data.cache = JSON.stringify(newObj);
      // console.log(this.$data.cache);
    },
    methods: {
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
