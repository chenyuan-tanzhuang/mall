<template >
  <div class="cate-list">
    <scroll class="content" ref="scroll">
      <cate-list-item v-for="(item, index) in cartList" :product="item" :key="index" />
    </scroll>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
import Scroll from 'components/common/scroll/Scroll'

import CateListItem from './CateListItem'
export default {
  name: 'CateList',
  components: {
    Scroll,
    CateListItem
  },
  computed: {
    ...mapGetters(['cartList'])
  },
  activated() {
    this.$refs.scroll.refresh()
  }
}
</script>
<style scoped>
  .cate-list {
    height: calc(100% - 133px);
    overflow: hidden;
  }
  .content {
    height: 100%;
  }
</style>