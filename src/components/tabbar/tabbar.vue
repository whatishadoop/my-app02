<template>
  <div :cache="cache" ctype="tabbar" obj="component">
    <mt-tabbar v-model="selected">
      <mt-tab-item id="首页">
        <img slot="icon" src="../../common/image/logo.png">
        <router-link to="/AppDesigner/content">
          首页
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="投资">
        <img slot="icon" src="../../common/image/logo.png">
          投资
      </mt-tab-item>
      <mt-tab-item id="论坛">
        <img slot="icon" src="../../common/image/logo.png">
          论坛
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="../../common/image/logo.png">
          我的
      </mt-tab-item>
      <mt-tab-item id="更多">
        <img slot="icon" src="../../common/image/logo.png">
          更多
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        selected: '首页',
        cache: ''
      };
    }
  };
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus" scoped>

</style>
