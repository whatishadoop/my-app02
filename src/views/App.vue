<template>
  <dev-article :showmenu="showmenu">
    <component-a style="background:white;"></component-a>
  </dev-article>
</template>

<script>
  import ComponentA from 'views/AppDesigner';

  export default {
    name: 'App',
    components: {
      'component-a': ComponentA
    },
    data() {
      return {
        showmenu: false
      };
    }
  };
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus" scoped>

</style>
