<template lang="">
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :bannerList="bannerList" />
    <home-recommend :recommend="recommend" />
    <home-feature />
    <tabs :titles="['流行','时尚','精选']" />

    <ul>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </ul>
  </div>
</template>
<script>
import NavBar from 'components/common/navBar/NavBar'
import Tabs from 'components/centent/tabs/Tabs'

import HomeSwiper from './childComp/HomeSwiper'
import HomeRecommend from './childComp/HomeRecommend'
import HomeFeature from './childComp/HomeFeature'

import {homeBannerData, homeGoodsData} from 'network/home'

export default {
  name: 'Home',
  components: {
    NavBar,
    Tabs,
    HomeSwiper,
    HomeFeature,
    HomeRecommend,
    homeGoodsData
  },
  data() {
    return {
      bannerList: [],
      recommend: [],
      goods: {
        'pop':{page: 0, list: {}},
        'new':{page: 0, list: {}},
        'sell':{page: 0, list: {}}
      }
    }
  },
  created() {
    this.getHomeBannerData();
    this.getHomeGoodsData('pop')
  },
  methods: {
    getHomeBannerData() {
      homeBannerData().then(res => {
        this.bannerList = res.data.banner.list;
        this.recommend = res.data.recommend.list
      })
    },
    getHomeGoodsData(type) {
      const page = this.goods[type].page + 1;
      homeGoodsData(type, page).then(res => {
        // 把取到的数据存在goods中
        // this.goods[type].list.push(...res.data.list);
        // 当前页数+1
        this.goods[type].page += 1;
      })
    }
  },
}
</script>
<style >
  #home {
    height: 100vh;
    position: relative;
    padding: 44px 0 49px;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 9;
  }
</style>