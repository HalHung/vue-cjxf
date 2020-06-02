/* ============
 * State of the auth module
 * ============
 *
 * The initial state of the auth module.
 */

export default {
  packs: [{
    id: 'happiness_month',
    product: 'happiness_month',
    dateCreated: '2019-05-30T17:42:44Z',
    price: 90,
    lastUpdated: '2019-05-30T17:42:44Z',
    continuePrice: 90,
    active: true,
    isPublic: true,
    autoRenewing: true,
    intervalCount: 1,
    name: '幸福同行(月繳)',
    interval: 'month',
    memberType: {id: 2, startDate: '2019-05-14T00:00:00Z', seq: 2, lookupType: {type: 'MEMBER'}, name: '白金會員'},
    description: '每個月90元協助澈見幸福營運</br>護持大家學法',
    priceInfo: 'NT90 元/月'
    },
    {
    id: 'happiness_year',
    product: 'happiness_year',
    dateCreated: '2019-05-30T17:42:44Z',
    price: 1080,
    lastUpdated: '2019-05-30T17:42:44Z',
    continuePrice: 1080,
    active: true,
    isPublic: true,
    autoRenewing: true,
    intervalCount: 1,
    name: '澈見勇士(年繳)',
    interval: 'year',
    memberType: {id: 2, startDate: '2019-05-14T00:00:00Z', seq: 2, lookupType: {type: 'MEMBER'}, name: '白金會員'},
    description: '每年1080元協助澈見幸福營運</br>護持大家學法',
    priceInfo: 'NT1080 元/年'
    },
    {id: 'happiness',
    product: 'happiness',
    dateCreated: '2020-05-08T00:00:00Z',
    intervalCount: 1,
    price: 0,
    lastUpdated: '2020-05-08T00:00:00Z',
    name: '福氣包',
    continuePrice: 0,
    active: true,
    interval: 'min',
    isPublic: false,
    autoRenewing: false,
    description: '協助澈見幸福營運</br>護持大家學法'}
  ],
  payment: ['credit'],
  monthPayList: [],
  yearPayList: [],
  couponPayList: [],
  totalPayList: []
};
