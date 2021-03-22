<template lang="">
  <Swiper>
    <SwiperItem v-for="(item, index) in bannerList" :key="index">
      <a :href="item.link" alt="">
        <img :src="item.image923" @load="imageLoad" />
      </a>
    </SwiperItem>
  </Swiper>
</template>
<script>
import {Swiper, SwiperItem} from 'components/common/swiper'
export default {
  name: 'HomeSwiper',
  data() {
    return {
      isLoad: false
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    bannerList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    imageLoad() {
      if(!this.isLoad){
        this.$emit('swiperImgLoad')
        this.isLoad = true
      }
    }
  },
}
</script>
<style scoped>
  img {
    width: 100%;
  }
</style>