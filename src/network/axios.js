import axios from 'axios'

export function request(config) {
  // 1.创建axios实例
  const instance = axios.create({
    baseURL: '',
    timeout: 5000
  })
  // 2.拦截器
  instance.interceptors.request.use(config => {
    // 请求成功 不复合要求  loading 登陆 等操作
    return config
  }, err => {
  })
  // 2.2 响应拦截
  instance.interceptors.response.use(res => {
    // 响应成功
    return res.data
  }, err => {
    // 响应失败
  })
  // 3. 发送网络请求 返回promis
  return instance(config)
}