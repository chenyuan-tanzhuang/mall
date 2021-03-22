<template lang="">
  <div class="recommend-box">
    <div v-for="(item, index) in recommend" :key="index">
      <a :href="item.link" alt="">
        <img class="recommend-img" :src="item.image" />
      </a>
      <div>{{ item.title }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommend: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>
<style>
  .recommend-box {
    display: flex;
    text-align: center;
    font-size: 12px;
    padding: 15px 0 20px;
    border-bottom: 8px solid #eee;
    background-color: #fff;
  }
  .recommend-box > div {
    flex: 1;
  }
  .recommend-img {
    width: 65px;
    height: 65px;
    margin-bottom: 10px;
  }
</style>