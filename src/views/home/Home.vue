<template lang="">
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tabs class="tab-control" 
          :titles="['流行','时尚','精选']" 
          @tabsClick="tabsClick" 
          ref="tabControl1" 
          v-show="isTabFixed"/>
    <scroll class="content" 
            ref="scroll" 
            :probe-type="3" 
            :pull-up-load="true"
            @scroll="contentScroll"
            @pullingUp="loadMore" >
      <home-swiper :bannerList="bannerList" @swiperImgLoad="swiperImgLoad" />
      <home-recommend :recommend="recommend" />
      <home-feature />
      <tabs :titles="['流行','时尚','精选']" 
            @tabsClick="tabsClick" 
            ref="tabControl2" />
      <goods-list :goods="showGoods" />
    </scroll>
    <!-- 组件点击事件需要添加事件修饰符 -->
    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>
<script>
import NavBar from 'components/common/navBar/NavBar'
import Tabs from 'components/centent/tabs/Tabs'
import GoodsList from 'components/centent/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/centent/backtop/BackTop'

import HomeSwiper from './childComp/HomeSwiper'
import HomeRecommend from './childComp/HomeRecommend'
import HomeFeature from './childComp/HomeFeature'

import {homeBannerData, homeGoodsData} from 'network/home'
import {debounce} from 'common/utils'

export default {
  name: 'Home',
  components: {
    NavBar,
    Tabs,
    GoodsList,
    Scroll,
    BackTop,
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
        'pop':{page: 0, list: []},
        'new':{page: 0, list: []},
        'sell':{page: 0, list: []}
      },
      currentType: 'pop',
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  created() {
    this.getHomeBannerData();
    this.getHomeGoodsData('pop');
    this.getHomeGoodsData('new');
    this.getHomeGoodsData('sell');
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
        this.goods[type].list.push(...res.data.list)
        // 当前页数+1
        this.goods[type].page += 1;

        // 以完成了加载更多数据 初始化 pullup
        this.$refs.scroll.finishPullUp()
      })
    },
    swiperImgLoad() {
      // 吸顶效果
      // 所有的组件都有一个属性$el
      // this.$refs.tabControl.$el.offsetTop
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
    /**
     * 事件
     */
    contentScroll(position) {
      // 拿到页面滚动的位置 是否显示backtop图标
      this.isShowBackTop = -(position.y) > 500
      //
      this.isTabFixed = -(position.y) > this.tabOffsetTop
    },
    // 返回顶部
    backClick() {
      this.$refs.scroll.scrollTo(0, 0)
    },
    tabsClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break;
        case 1:
          this.currentType = 'new'
          break;
        case 2:
          this.currentType = 'sell'
          break;
      }
      this.$refs.tabControl1.activeIndex = index;
      this.$refs.tabControl2.activeIndex = index;
    },
    // 下来加载更多数据
    loadMore() {
      this.getHomeGoodsData(this.currentType)
    },
  },
  mounted() {
    // 监听图片加载完成
    const refresh = debounce(this.$refs.scroll.refresh, 500);
    this.$bus.$on('itemImgLoad', () => {
      // 等待图片异步加载完成 重新计算可滚动区域
      // this.$refs.scroll.refresh();
      // 防抖函数 
      refresh();
    })
    
  },
  // 活跃
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh();
  },
  // 离开
  deactivated() {
    // 拿到用户离开当前页面时当前页面滚动的距离
    this.saveY = this.$refs.scroll.getScrollY()
  },
}
</script>
<style scoped>
  #home {
    height: 100vh;
    position: relative;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    /* 在使用浏览器原生滚动时为了让导航不跟随一起滚动 */
    /*position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 9; */
  }
  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .tab-control {
    position: relative;
    z-index: 9;
  }
</style>