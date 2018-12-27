<template>
  <div>
    <barchart ref="chart1"></barchart>
    <p>userName (mapState) : {{ userName }}</p>
    <p>appNameWithVersion (mapGetters): {{ appNameWithVersion }}</p>
    <p>firstLetter (mapGetters): {{ firstLetter }}</p>
    <p>appName (this.$store.state.xxxx): {{ appName }}</p>
    <button @click="handleSubmit">向后台提交数据</button>
    <button @click="clickEvalFn">测试clickEvalFn</button>
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
        'login'
      ]),
      handleSubmit () {
        this.login({
          userName: this.userName,
          password: this.password
        }).then(() => {
          console.log('success!!');
          this.$router.push({
            name: 'home'
          });
        }).catch(error => {
          console.log(error);
        });
      },
      clickEvalFn() {
        // let jsonStr = this.clickEvalData;
       // let obj = this.$refs.chart1;
        // 方式一
        window.chart = this.$refs['chart1'];
        var foo = window;
        console.log(foo.eval(this.clickEvalData));
       // console.log(this.$refs.chart1);
      }
    },
    mounted: {

    }
  };
</script>
