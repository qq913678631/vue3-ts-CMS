import { ActionTree } from 'vuex'
import { IDashboardState } from './type'
import {
  getCategoryGoodsCount,
  getCategoryGoodsSale,
  getCategoryGoodsFavor,
  getAddressGoodsSale
} from '@/service/analysis/dashboard'

export const actions: ActionTree<IDashboardState, any> = {
  async getDashboardDataAction({ commit }) {
    const { data: categoryGoodsCount } = await getCategoryGoodsCount()
    const { data: categoryGoodsSale } = await getCategoryGoodsSale()
    const { data: categoryGoodsFavor } = await getCategoryGoodsFavor()
    const { data: addressGoodsSale } = await getAddressGoodsSale()

    commit('setCategoryGoodsCount', categoryGoodsCount)
    commit('setCategoryGoodsSale', categoryGoodsSale)
    commit('setCategoryGoodsFavor', categoryGoodsFavor)
    commit('setAddressGoodsSale', addressGoodsSale)
  }
}
