<template lang="">
  <div class="tabs-box">
    <div v-for="(item, index) in titles" :key="index" :class="{active: index === activeIndex}" @click="tabsClick(index)">
      <span>{{ item }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Tabs',
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      activeIndex: 0
    }
  },
  methods: {
    tabsClick(index) {
      this.activeIndex = index
    }
  },
}
</script>
<style>
  .tabs-box {
    display: flex;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }
  .tabs-box > div {
    flex: 1;
  }
  .tabs-box > div span {
    padding: 5px;
  }
  .active {
    color: var(--color-high-text);
  }
  .active span {
    border-bottom: 3px solid var(--color-tint);
  }
</style>