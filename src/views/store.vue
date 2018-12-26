<template>
  <div>

    <button @click="handleSubmit">点我</button>
    <p>userName : {{ userName }}</p>
    <p>appNameWithVersion: {{ appNameWithVersion }}</p>
    <p>firstLetter: {{ firstLetter }}</p>
    <p>appName: {{ appName }}</p>
  </div>
</template>

<script>
  import {mapState, mapGetters, mapActions} from 'vuex';
  export default {
    name: 'store',
    data() {
      return {
        inputValue: ''
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
      }
    }
  };
</script>
