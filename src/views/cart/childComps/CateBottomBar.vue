<template lang="">
  <div class="bottom-bar">
    <div class="check-box">
      <cate-check-button @click.native="checkClick" class="check-button" :is-check="isBottonAll" />全选
    </div>
    <div class="totalPrice">
      合计: {{totalPrice}}
    </div>
    <div class="cacllate">
      去计算({{checkLength}})
    </div>
  </div>
</template>
<script>
import CateCheckButton from './CateCheckButton'

import {mapGetters} from 'vuex'
export default {
  name: 'CateBottomBar',
  components: {
    CateCheckButton
  },
  methods: {
    checkClick() {
      // 全选按钮的 点击
      if(this.isBottonAll) {
        this.cartList.forEach(item => {
          item.isCheck = false
        });
      }else {
        this.cartList.forEach(item => item.isCheck = true)
      }
    }
  },
  computed: {
    ...mapGetters(['cartList']),

    totalPrice() {
      return this.$store.state.cartList.filter(item => {
        return item.isCheck
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count
      }, 0).toFixed(2) + "元"
    },
    checkLength() {
      // return this.$store.state.cartList.filter(item => item.isCheck).length
      return this.cartList.filter(item => item.isCheck).length
    },
    isBottonAll() {
      // return !(this.cartList.filter(item => !item.isCheck).length)
      if(this.cartList.length === 0) return false
      return !this.cartList.find(item => !item.isCheck)
    }
  }
}
</script>
<style scoped>
  .bottom-bar {
    position: relative;
    display: flex;
    height: 40px;
    background-color: #eee;
    align-items: center;
  }
  .check-box {
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    margin-left: 30px;
    justify-content: center;
    align-items: center;
  }
  .check-button {
    width: 20px;
    height: 20px;
    margin-left: 8px;
  }
  .check-box /deep/.checkButton img {
    margin-bottom: 8px;
  }
  .totalPrice {
    flex: 1;
    text-align: center;
  }
  .cacllate {
    /* position: absolute;
    right: 20px; */
    width: 90px;
    text-align: center;
  }
</style>