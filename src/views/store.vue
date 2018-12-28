<template>
  <div>
    <barchart ref="chart1"></barchart>
    <p>userName (mapState) : {{ userName }}</p>
    <p>appNameWithVersion (mapGetters): {{ appNameWithVersion }}</p>
    <p>firstLetter (mapGetters): {{ firstLetter }}</p>
    <p>appName (this.$store.state.xxxx): {{ appName }}</p>
    <button @click="clickEvalFn">测试clickEvalFn</button>
    <button @click="handleSubmit">测试vuex+axios</button>
  </div>
</template>
<script>
  import {mapState, mapGetters, mapActions} from 'vuex';

  export default {
    name: 'store',
    data() {
      return {
        inputValue: '',
        clickEvalData: 'var aa = "a" + 2;if(aa == "a2"){ 4444};window.chart.test("jjjjjjjj");'
      };
    },
    computed: {
      ...mapState({
        userName: state => state.user.userName
      }),
      ...mapGetters([
        'appNameWithVersion',
        'firstLetter'
      ]),
      appName() {
        return this.$store.state.appName;
      }
    },
    methods: {
      ...mapActions([
        'updateAppName',
        'login'
      ]),
      handleSubmit() {  // 测试vuex
        this.updateAppName().then(() => {
          console.log('success!!');
        }).catch(error => {
          console.log(error);
        });
      },
      clickEvalFn() {
        var foo = window;
        console.log(foo.eval(this.clickEvalData));
      }
    }
  };
</script>
