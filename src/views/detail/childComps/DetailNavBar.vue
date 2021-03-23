<template lang="">
  <div class="detail-tab">
    <nav-bar>
      <div slot="left" class="tab-left" @click="backClick">
        <img src="~assets/images/common/back.svg" />
      </div>
      <div slot="center" class="tab-center">
        <div v-for="(item, index) in titles" 
              :key="index"
              @click="tabClick(index)"
              :class="{active: index === actviveIndex}">
              {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from 'components/common/navBar/NavBar'
export default {
  name: 'Detail',
  components: {
    NavBar
  },
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      actviveIndex: 0
    }
  },
  methods: {
    tabClick(index) {
      this.actviveIndex = index;
    },
    backClick() {
      this.$router.back();
    }
  },
}
</script>
<style scoped>
  .detail-tab {
    position: relative;
    z-index: 9;
  }
  .tab-left img {
    margin-top: 10px;
  }
  .tab-center {
    display: flex;
    font-size: 14px;
  }
  .tab-center > div {
    flex: 1;
  }
  .active {
    color: var(--color-high-text);
  }
</style>