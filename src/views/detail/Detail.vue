<template lang="">
  <div class="detail">
    <detail-nav-bar />
    <detail-swiper :top-images="topImages" />
  </div>
</template>
<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'

import {getDetail} from 'network/detail'
export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailSwiper
  },
  data() {
    return {
      iid: null,
      topImages: []
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
        this.topImages = res.result.itemInfo.topImages
      })
    }
  },
  mounted() {
    
  },
}
</script>
<style >
  
</style>