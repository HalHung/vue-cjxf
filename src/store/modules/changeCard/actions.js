import API from '@/api/';
// import * as types from './mutation-types';
// import { Message } from 'element-ui'

export const getOrderInfo = (params, r1) => { // params是vuex裡面的東西(可以把下面的r1改成params看看)
  return new Promise((resolve) => {
    console.log('getOrderInfo:' + JSON.stringify(r1))
    API.changeCard.getOrderInfo(r1).then(res => {
      // params.commit(types.SET_ORDER_INFO);
      resolve(res);
    });
  })
}

export const changeCreditCard = (params, r1) => { // params是vuex裡面的東西(可以把下面的r1改成params看看)
  return new Promise((resolve) => {
    console.log('changeCreditCard:' + JSON.stringify(r1))
    API.changeCard.changeCreditCard(r1).then(res => {
      resolve(res);
    });
  })
}

export default {
  getOrderInfo,
  changeCreditCard
};
