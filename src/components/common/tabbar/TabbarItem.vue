<template lang="">
    <div class="tab-bar-item" @click="btnClick">
      <div v-if="!isActive"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>
      <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
</template>
<script>
export default {
  name: 'TabbarItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'salmon'
    }
  },
  data() {
    return {
      // isActive: false,
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) != -1
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor}:{}
    }
  },
  methods: {
    btnClick() {
      // 问题 多次点击报错
      if(this.$route.path != this.path){
        this.$router.push(this.path);
      }
    }
  },
}
</script>
<style >
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin: 3px 0 2px 0;
  }
</style>