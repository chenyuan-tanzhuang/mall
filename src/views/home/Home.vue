<template lang="">
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
  </div>
</template>
<script>
import NavBar from 'components/common/navBar/NavBar'

import {homeBannerData} from 'network/home'

export default {
  name: 'Home',
  components: {
    NavBar
  },
  data() {
    return {
      bannerList: []
    }
  },
  created() {
    homeBannerData().then(res => {
      this.bannerList = res.data.banner.list
    }, err => {

    })
  },
}
</script>
<style >
  #home {
    height: 100vh;
    position: relative;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>