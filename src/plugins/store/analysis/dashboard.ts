import { Module } from 'vuex'
import { IDashboardState } from './type'
import { IRootState } from '../type'
import { actions } from './actions'
import { mutations } from './mutation'

export const dashboardModule: Module<IDashboardState, IRootState> = {
  namespaced: true,
  state: {
    categoryGoodsCount: [],
    categoryGoodsSale: [],
    categoryGoodsFavor: [],
    addressGoodsSale: []
  },
  mutations,
  actions
}

export default dashboardModule
