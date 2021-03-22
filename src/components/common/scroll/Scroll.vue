<template lang="">
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BSrcoll from 'better-scroll'
export default {
  name: 'Scroll',
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null,
      message: '我是有底线的~~~'
    }
  },
  mounted() {
    // 创建BScroll 对象
    this.scroll = new BSrcoll(this.$refs.wrapper, {
      // 运行内部元素可以执行点击事件 默认为false
      click: true,
      // 监听当前滑动是否到达底部 默认为0, 0和1 都是不监听
      probeType: this.probeType,
      // 是否加载数据 默认false
      pullUpLoad: this.pullUpLoad
    })
    // 监听滚动的位置
    if(this.probeType === 2 || this.probeType === 3) {
      this.scroll.on('scroll', (position) => {
        // 把当前页面滚动的x,y的值传递给父组件
        this.$emit('scroll', position)
      })
    }
    // 监听scroll 滚动到底部
    if(this.pullUpLoad) {
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })
    }
  },
  methods: {
    scrollTo(x, y, time=300) {
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    finishPullUp() {
      this.scroll.finishPullUp();
    }
  },
}
</script>
<style scoped>
  
</style>