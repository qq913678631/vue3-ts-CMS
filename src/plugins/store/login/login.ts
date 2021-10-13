import { Module } from 'vuex'
import { ILoginState } from './type'
import { IRootState } from '../type'
import { actions } from './actions'
import { mutations } from './mutations'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state: {
    token: '',
    userInfo: {},
    userMenus: []
  },
  mutations: mutations,
  actions: actions
}

export default loginModule
