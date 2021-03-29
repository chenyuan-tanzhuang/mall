<template lang="">
  <div class="checkButton" :class="{check: isCheck}">
    <img src="~assets/images/cart/tick.svg" />
  </div>
</template>
<script>
export default {
  name: 'CateCheckButton',
  props: {
    isCheck: {
      type: Boolean,
      default: true
    }
  }
}
</script>
<style scoped>
  .checkButton {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    border-radius: 50%;
    border: 2px solid #666;
  }
  .check {
    border-color: lightcoral;
    background: lightcoral;
  }
</style>