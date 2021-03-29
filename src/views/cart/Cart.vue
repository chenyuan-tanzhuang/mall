<template>
  <div class="category">
    <nav-bar class="category-navbar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <cate-list />
  </div>
</template>
<script>


import NavBar from 'components/common/navBar/NavBar'
import CateList from './childComps/CateList'

import {mapGetters} from 'vuex'
export default {
  name: 'Cart',
  components: {
    NavBar,
    CateList
  },
  data() {
    return {
      
    }
  },
  computed: {
    // 两种写法
    ...mapGetters([
      'cartLength'
    ]),
    // 第二种
    // ...mapGetters({
    //   cartLength: 'cartLength'
    // })
  }
}
</script>
<style scoped>
  .category {
    overflow: hidden;
    z-index: 9;
    height: 100%;
  }
  .category-navbar {
    color: #fff;
    background-color: var(--color-tint);
    letter-spacing: 2px;
    z-index: 9;
  }
</style>