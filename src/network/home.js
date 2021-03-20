import {request} from './axios'

export function homeBannerData() {
  return request({
    url: '/home/multidata'
  })
}

export function homeGoodsData(type, page) { 
  return request({
    url: '/home/data',
    params:{
      type,
      page
    }
  })
}