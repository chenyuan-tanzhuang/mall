<template lang="">
  <div class="detail">
    <detail-nav-bar />
    <detail-swiper :top-images="topImages" />
    <detail-base-info :goods="goods" />
  </div>
</template>
<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'

import {getDetail, Goods} from 'network/detail'
export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {}
    }
  },
  created() {
    this.iid = this.$route.params.iid
    // 根据 id 请求数据
    this.gitDetailData(this.iid)
  },
  methods: {
    gitDetailData(iid) {
      getDetail(iid).then(res => {
        let data = res.result;
        console.log('object :>> ', data);
        this.topImages = data.itemInfo.topImages;
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      })
    }
  },
  mounted() {
    
  },
}
</script>
<style scoped>
  .detail {
    height: 100vh;
  }
</style>