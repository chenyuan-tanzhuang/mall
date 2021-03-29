export default {
  addCart(context, payload) {
    // 使用数组 find() 方法
    let oldProduct = context.state.cartList.find(item => item.iid === payload.iid )
    if(oldProduct){
      // product.count += 1;
      context.commit('addCount', oldProduct)
    }else {
      payload.count = 1;
      // context.state.cartList.push(payload);
      context.commit('addToCart', payload)
    }
  }
}