<template lang="">
  <Swiper>
    <SwiperItem v-for="(item, index) in bannerList" :key="index">
      <a :href="item.link" alt="">
        <img :src="item.image923" />
      </a>
    </SwiperItem>
  </Swiper>
</template>
<script>
import {Swiper, SwiperItem} from 'components/common/swiper'
export default {
  name: 'HomeSwiper',
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
  }
}
</script>
<style scoped>
  img {
    width: 100%;
  }
</style>