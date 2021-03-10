import request from '@/utils/request'

function getOrderInfo (params) {
  return request({
    url: '/subscription/getChangeCreditCardInfo',
    method: 'post',
    data: params,
  })
}

function changeCreditCard (params) {
  return request({
    url: '/subscription/changeCreditCard',
    method: 'post',
    data: params,
  })
}
export default {
  getOrderInfo,
  changeCreditCard
}
