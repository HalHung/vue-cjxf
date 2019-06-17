/* ============
 * State of the auth module
 * ============
 *
 * The initial state of the auth module.
 */

export default {
  packs: [{
      amount: '0',
      priceInfo: '免費試聽<br><small style="font-size:.9rem;color:#999;">每日三首</small>',
      count: '0',
      desc: 'FB、信箱註冊登錄<br>給您無限力量的好音樂',
      id: '0',
      name: '體驗會員',
      type: 'normal'

    }
    // ,
    // {
    //   id: '1',
    //   title: '月費會員',
    //   desc: '天天享有各種曲風好音樂 隨時隨地輕鬆享有好心情',
    //   priceInfo: 'NT$100 元/月',
    // },

    // {
    //   id: '2',
    //   title: '白金會員',
    //   desc: '年費優惠 <del>$1200</del> → $1000  陪伴永久不斷線',
    //   priceInfo: 'NT$1000 元/年',
    // },
  ],
  payment: ['credit'],
  monthPayList: [],
  yearPayList: [],
  couponPayList: [],
  totalPayList: []
};
