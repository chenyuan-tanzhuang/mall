<template lang="">
  <div v-if="Object.keys(goods).length !==0" class="detail-base-info">
    <div class="detail-title">{{ goods.title }}</div>
    <div class="detail-price">
      <span class="newPrice">{{ goods.newPrice }}</span>
      <span class="oldPrice">{{ goods.oldPrice }}</span>
      <span class="discount" v-if="goods.discount">{{ goods.discount }}</span>
    </div>
    <div class="detail-cloumns">
      <div v-for="(item, index) in goods.columns" :key="index">{{ item }}</div>
    </div>
    <div class="detail-services">
      <span v-for="(item, index) in goods.services" :key="index">
        <img :src="item.icon" />
        <span>{{ item.name }}</span>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>
<style scoped>
  .detail-base-info {
    padding: 0 8px;
    color: #999;
    border-bottom: 5px solid #f2f5f8;
  }
  .detail-title {
    padding: 10px 0;
  }
  .detail-price {
    line-height: 30px;
  }
  .detail-price span{
    display: inline-block;
    line-height: 20px;
    margin-right: 10px;
  }
  .detail-price .newPrice {
    font-size: 18px;
    color: var(--color-high-text);
  }
  .detail-price .oldPrice {
    font-size: 14px;
    text-decoration: line-through;
    color: #666;
  }
  .detail-price .discount {
    font-size: 12px;
    padding: 2px 5px;
    color: #fff;
    background-color: var(--color-high-text);
    border-radius: 8px;
    position: relative;
    top: -8px;
  }
  .detail-cloumns {
    display: flex;
  }
  .detail-cloumns > div {
    flex: 1;
    text-align: center;
    color: rgb(53, 52, 52, .5);
    font-size: 14px;
    border-bottom: 1px solid rgba(100,100,100,.1);
    line-height: 30px;
  }
  .detail-cloumns > div:first-child {
    text-align: left;
  }
  .detail-cloumns > div:last-child {
    text-align: right;
  }
  .detail-services {
    display: flex;
    font-size: 12px;
    justify-content: space-between;
    color: #333;
    line-height: 60px;
  }
  .detail-services > span img {
    width: 14px;
    position: relative;
    top: 2px;
  }
</style>