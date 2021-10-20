import { Module } from 'vuex'
import { ISystemState } from './type'
import { IRootState } from '../type'
import { actions } from './actions'
import { mutations } from './mutations'
import { getters } from './getters'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state: {
    usersList: [],
    usersCount: 0,
    roleList: [],
    roleCount: 0,
    goodsList: [],
    goodsCount: 0,
    menuList: [],
    menuCount: 0
  },
  actions: actions,
  mutations: mutations,
  getters: getters
}

export default systemModule
