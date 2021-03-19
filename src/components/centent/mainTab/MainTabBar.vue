<template lang="">
    <tab-bar>
      <tabbar-item path="/home" activeColor="salmon">
        <img slot="item-icon" src="~assets/images/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="~assets/images/tabbar/home_active.svg" alt="">
        <div slot="item-text"><span>首页</span></div>
      </tabbar-item>
      <tabbar-item path="/cart" activeColor="salmon">
        <img slot="item-icon" src="~/assets/images/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="~/assets/images/tabbar/category_active.svg" alt="">
        <div slot="item-text"><span>分类</span></div>
      </tabbar-item>
      <tabbar-item path="/category" activeColor="salmon">
        <img slot="item-icon" src="~/assets/images/tabbar/shopcart.svg" alt="">
        <img slot="item-icon-active" src="~/assets/images/tabbar/shopcart_active.svg" alt="">
        <div slot="item-text"><span>包裹</span></div>
      </tabbar-item>
      <tabbar-item path="/profile" activeColor="salmon">
        <img slot="item-icon" src="~/assets/images/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="~/assets/images/tabbar/profile_active.svg" alt="">
        <div slot="item-text"><span>我的</span></div>
      </tabbar-item>
    </tab-bar>
</template>
<script>
import TabBar from '../../common/tabbar/Tabbar'
import TabbarItem from '../../common/tabbar/TabbarItem'
export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabbarItem
  }
}
</script>
<style lang="">
  
</style>