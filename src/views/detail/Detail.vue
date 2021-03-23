<template lang="">
  <div class="detail">
    <detail-nav-bar />
    <scroll class="content" ref="Dscroll">
      <detail-swiper :top-images="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @image-load="imgLoadMore" />
    </scroll>
    
  </div>
</template>
<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import Scroll from 'components/common/scroll/Scroll'

import {getDetail, Goods, Shop, GoodsParam} from 'network/detail'
export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    Scroll
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {}
    }
  },
  created() {
    this.iid = this.$route.params.iid
    // 根据 id 请求数据
    getDetail(this.iid).then(res => {
      let data = res.result;
      console.log('object :>> ', data);
      this.topImages = data.itemInfo.topImages;
      // 获取描述的信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
      // 获取店铺的信息
      this.shop = new Shop(data.shopInfo);
      // 获取详情数据
      this.detailInfo = data.detailInfo
    })
  },
  methods: {
    imgLoadMore() {
      // 图片加载完成 从新计算 scroll滚动高度
      this.$refs.Dscroll.refresh()
    }
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