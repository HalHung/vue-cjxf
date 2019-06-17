import {

  SET_INVOICELIST,
  RESET_INVOICELIST

} from './mutation-types';

export default {
  [RESET_INVOICELIST] (state) {
    // state.couponPayList.length.splice(0)
    // state.monthPayList.splice(1)
    // state.yearPayList.length.splice(1)
  },
  [SET_INVOICELIST] (state, {
    items
  }) {
    state['invoiceList'] = [
      ...items
    ]
  }
};
