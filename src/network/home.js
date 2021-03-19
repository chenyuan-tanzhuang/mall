import {request} from './axios'

export function homeBannerData() {
  return request({
    url: '/home/multidata'
  })
}