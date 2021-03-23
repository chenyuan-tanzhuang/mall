<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from 'components/centent/mainTab/MainTabBar'
export default {
  name: 'app',
  components: {
    MainTabBar
  }
}
</script>

<style>
  @import 'assets/css/base.css';
  html, body {
    height: 100%;
    overflow: hidden;
  }
  #app {
    height: 100%;
  }
</style>
