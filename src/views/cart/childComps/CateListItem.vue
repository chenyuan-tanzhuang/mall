<template lang="">
  <div class="cate-list">
    <div class="list-box clear-fix">
      <cate-check-button class="checkButton" :is-check="product.isCheck"  @click.native="clcikCheck" />
      <div class="item-left">
        <img :src="product.image" />
      </div>
      <div class="item-right">
        <div class="item-title">{{product.title}}</div>
        <div class="item-desc">{{product.desc}}</div>
        <div class="item-pirce">
          <span class="priceColor">{{product.price}}</span>
          <span>x{{product.count}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CateCheckButton from './CateCheckButton'
export default {
  name: 'CateListItem',
  props: {
    product: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: {
    CateCheckButton
  },
  methods: {
    clcikCheck() {
      this.product.isCheck = !this.product.isCheck
    }
  },
}
</script>
<style scoped>
  .cate-list {
    padding: 10px 8px;
  }
  .list-box {
    width: 100%;
    overflow: hidden;
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
    position: relative;
  }
  .item-left {
    width: 30%;
    text-align: right;
    float: left;
  }
  .item-left > img {
    width: 80px;
    border-radius: 5px;
  }
  .item-right {
    width: 70%;
    float: left;
    padding-left: 10px;
  }
  .item-right > div {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 40px;
  }
  .item-desc {
    color: #bbb;
    font-size: 14px;
  }
  .item-pirce > span{
    float: left;
    padding: 0 10px;
  }
  .item-pirce > span:last-child {
    float: right;
  }
  .priceColor {
    color: var(--color-high-text);
  }
</style>