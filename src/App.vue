<template>
  <div id="app">
    <header>
      <span id="logo">YY Music</span>
    </header>
    <nav1></nav1>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import nav1 from './components/nav.vue';
  import store from './vuex/store';
  import {
    mapGetters,
    mapActions
  } from 'vuex';
  
  export default {
    name: 'app',
    store: store,
    components: {
      'nav1': nav1
    },
    computed: mapGetters([]),
    methods: mapActions([
      'increment',
      'decrement'
    ])
  
  }
</script>

<style>
  header {
    height: 44px;
    background: #31c27c;
    position: relative;
  }
  
  #logo {
    color: #fff;
    font-size: 20px;
    position: absolute;
    left: 20px;
    line-height: 44px;
  }
  
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #2c3e50;
    background: #eee;
  }
</style>
