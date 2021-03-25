import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // ...
  state: {
    cartList: []
  },
  mutations: {
    // 修改state的值 通过 mutations
    addCart(state, payload) {
      state.cartList.push(payload)
    }
  }
})

export default store