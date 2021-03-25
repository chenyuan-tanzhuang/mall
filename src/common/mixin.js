import {debounce} from './utils'
import BackTop from 'components/centent/backtop/BackTop'

export const mixinsData = {
  data() {
    return {
      itemImgListener: null,
      newRefresh: null
    }
  },
  mounted() {
    this.newRefresh = debounce(this.$refs.scroll.refresh, 100)
    this.itemImgListener = () => {
      this.newRefresh()
    }
    this.$bus.$on('itemImagLoad', this.itemImgListener);
  },
}

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false,
      tabOffsetTop: 0
    }
  },
  methods: {
    // 返回顶部
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    isShowBack(position) {
      this.isShowBackTop = -(position.y) > this.tabOffsetTop
    }
  },
}