import { MutationTree } from 'vuex/types/index.js'
import { IDashboardState } from './type'

export const mutations: MutationTree<IDashboardState> = {
  setCategoryGoodsCount(state, categoryGoodsCount) {
    state.categoryGoodsCount = categoryGoodsCount
  },
  setCategoryGoodsSale(state, categoryGoodsSale) {
    state.categoryGoodsSale = categoryGoodsSale
  },
  setCategoryGoodsFavor(state, categoryGoodsFavor) {
    state.categoryGoodsFavor = categoryGoodsFavor
  },
  setAddressGoodsSale(state, addressGoodsSale) {
    state.addressGoodsSale = addressGoodsSale
  }
}
