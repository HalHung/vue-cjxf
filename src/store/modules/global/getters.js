/* ============
 * Getters for the global module
 * ============
 *
 * The getters that are available on the
 * global module.
 */
export const packs = (state) => {
  return [
    ...state.packs.filter(p => p.isPublic),
    // ...state.totalPayList
  ]
}
export const allpacks = (state) => {
  return [
    ...state.packs
    // ...state.totalPayList
  ]
}
export const monthPayList = (state) => {
  return state.monthPayList
}
export const yearPayList = (state) => {
  return state.yearPayList
}
export const couponPayList = (state) => {
  return state.couponPayList
}
export const payList = (state) => {
  return [
    ...state.totalPayList
  ]
}
export default {
  packs,
  monthPayList,
  yearPayList,
  couponPayList,
  payList,
  allpacks
}
