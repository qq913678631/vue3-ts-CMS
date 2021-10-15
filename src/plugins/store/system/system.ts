import { Module } from 'vuex'
import { ISystemState } from './type'
import { IRootState } from '../type'
import { actions } from './actions'
import { mutations } from './mutations'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state: {
    name: ''
  },
  actions: actions,
  mutations: mutations
}

export default systemModule
