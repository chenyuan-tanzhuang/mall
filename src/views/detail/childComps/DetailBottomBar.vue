<template lang="">
  <div class="detail-bottom">
    <div class="detail-shop">
      <span class="shopSpan"></span>
      <div>店铺</div>
    </div>
    <div class="detail-service">
      <span></span>
      <div>客服</div>
    </div>
    <div class="detail-collect" @click="collect">
      <span class="collectSpan" :class="{collect: isCollect}"></span>
      <div>收藏</div>
    </div>
    <div class="detail-addCart" @click="addCart">
      <div>加入购物车</div>
    </div>
    <div class="detail-purchase">
      <div>购买</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailBottomBar',
  data() {
    return {
      isCollect: false
    }
  },
  methods: {
    collect() {
      this.isCollect = !this.isCollect
    },
    addCart() {
      console.log('点击添加到购物车');
      this.$emit("addCart");
    }
  },
}
</script>
<style scoped>
  .detail-bottom {
    height: 49px;
    position: relative;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9;
    background-color: #fff;
    display: flex;
    text-align: center;
  }
  .detail-bottom > div {
    flex: 1;
    align-items: center;
  }
  .detail-bottom div span {
    display: inline-block;
    height: 25px;
    width: 40px;
  }
  .shopSpan {
    background: url('~assets/images/detail/detail_bottom.png') no-repeat 10px -110px;
    background-size: 25px;
  }
  .detail-service span {
    background: url('~assets/images/detail/detail_bottom.png') no-repeat 10px -60px;
    background-size: 25px;
  }
  .collectSpan {
    background: url('~assets/images/detail/detail_bottom.png') no-repeat 10px 0px;
    background-size: 25px;
  }
  .collect {
    background: url('~assets/images/detail/detail_bottom.png') no-repeat 10px -30px;
    background-size: 25px;
  }
  .detail-addCart,
  .detail-purchase {
    background-color: pink;
    line-height: 49px;
    color: #fff;
  }
  .detail-bottom div:nth-child(4) {
    flex: 2;
    background-color: #f50;
    color: #000;
  }
</style>