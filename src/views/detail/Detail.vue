<template lang="">
  <div class="detail">
    <detail-nav-bar @titleClick="titleClick" ref="detailNavBar" />
    <scroll class="content" ref="scroll" 
            :probe-type="3"
            @scroll="contentScroll">
      <detail-swiper :top-images="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @imagesInfo="imgLoadMore" />
      <detail-params-info ref="params" :detail-params="itemParams" />
      <detail-comment-info ref="comment" :comment-info="commentInfo" />
      <goods-list ref="recommends" :goods="recommends" />
    </scroll>
  </div>
</template>
<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamsInfo from './childComps/DetailParamsInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import GoodsList from 'components/centent/goods/GoodsList'

import Scroll from 'components/common/scroll/Scroll'

import {getDetail, Goods, Shop, GoodsParam, getRecommend} from 'network/detail'

import {mixinsData} from 'common/mixin'
import {debounce, debouceY} from 'common/utils'
export default {
  name: 'Detail',
  mixins: [mixinsData],
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    GoodsList,
    Scroll
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      itemParams: {},
      commentInfo: {},
      recommends: [],
      themeTopY: [],
      getThemeTopYData: null,
      titleIndex: null
    }
  },
  created() {
    this.iid = this.$route.params.iid
    // 根据 id 请求数据
    getDetail(this.iid).then(res => {
      let data = res.result;
      this.topImages = data.itemInfo.topImages;
      // 获取描述的信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
      // 获取店铺的信息
      this.shop = new Shop(data.shopInfo);
      // 获取详情数据
      this.detailInfo = data.detailInfo;
      // 商品参数信息
      this.itemParams = new GoodsParam(data.itemParams.info, data.itemParams.rule);
      // 评论信息
      if(data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
      // 下一帧
      // this.$nextTick(() => {
      //   // 2.
      //   // DOM渲染完成 但是图片还没加载完成
      //   // this.themeTopY = []
      //   // this.themeTopY.push(0)
      //   // this.themeTopY.push(this.$refs.params.$el.offsetTop)
      //   // this.themeTopY.push(this.$refs.comment.$el.offsetTop)
      //   // this.themeTopY.push(this.$refs.recommends.$el.offsetTop)
      // })
    });
    // 获取详情页推荐数据
    getRecommend().then(res => {
      this.recommends = res.data.list;
    })
    // 给getThemeTopYData  防抖
    this.getThemeTopYData = debouceY( () => {
      this.themeTopY = []
      this.themeTopY.push(0)
      this.themeTopY.push(this.$refs.params.$el.offsetTop)
      this.themeTopY.push(this.$refs.comment.$el.offsetTop)
      this.themeTopY.push(this.$refs.recommends.$el.offsetTop)
      this.themeTopY.push(Number.MAX_VALUE)
    }, 100)
  },
  methods: {
    imgLoadMore() {
      this.newRefresh();
      this.getThemeTopYData()
      // this.getThemeTopYData();
      // 3.
      // this.themeTopY = []
      // this.themeTopY.push(0)
      // this.themeTopY.push(this.$refs.params.$el.offsetTop)
      // this.themeTopY.push(this.$refs.comment.$el.offsetTop)
      // this.themeTopY.push(this.$refs.recommends.$el.offsetTop)
    },
    titleClick(index){
      this.$refs.scroll.scrollTo(0, -this.themeTopY[index] ,1000/60)
    },
    contentScroll(position) {
      // 获取 页面滚动的 距离 显示对应的 title
      const positionY = -position.y;
      let length = this.themeTopY.length;
      for (let i = 0; i < length; i++) {
        if(this.titleIndex !== i) {
          if(positionY >= this.themeTopY[i] && positionY < this.themeTopY[i+1]) {
            this.titleIndex = i;
            this.$refs.detailNavBar.actviveIndex = this.titleIndex;
          }
        }
      }
    }
  },
  updated() {
    // 1.
    // this.themeTopY = []
    // this.themeTopY.push(0)
    // this.themeTopY.push(this.$refs.params.$el.offsetTop)
    // this.themeTopY.push(this.$refs.comment.$el.offsetTop)
    // this.themeTopY.push(this.$refs.recommends.$el.offsetTop)
  },
  destroyed() {
    
  },
}
</script>
<style scoped>
  .detail {
    position: relative;
    background-color: #fff;
    z-index: 9;
    height: 100vh;
    overflow: hidden;
  }
  .content {
    height: calc(100% - 44px);
  }
</style>