export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      // 使用数组 find() 方法
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid )
      if(oldProduct){
        // product.count += 1;
        context.commit('addCount', oldProduct)
        resolve("当前的商品数量+1")
      }else {
        payload.count = 1;
        // context.state.cartList.push(payload);
        context.commit('addToCart', payload)
        resolve("添加了新的商品")
      }
    })
  }
}