export default {
  // 修改state的状态 通过 mutations
  // addCart(state, payload) {
  //   let prodCount = null;
  //   for(let item of state.cartList) {
  //     if(item.iid === payload.iid) {
  //       prodCount = item;
  //     }
  //   }
  //   if(prodCount) {
  //     prodCount.count += 1
  //   }else {
  //     payload.count = 1;
  //     state.cartList.push(payload);
  //   }
  // }
  addCount(state, payload) {
    payload.count++
  },
  addToCart(state, payload) {
    payload.isCheck = true;
    state.cartList.push(payload);
  }
}