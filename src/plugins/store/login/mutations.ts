import { MutationTree } from 'vuex/types/index.js'
import { ILoginState } from './type'

export const mutations: MutationTree<ILoginState> = {
  setUserToken(state, token: string) {
    state.token = token
  },

  setUserInfo(state, userInfo: any) {
    state.userInfo = userInfo
  },

  setUserMenus(state, userMenus: any) {
    state.userMenus = userMenus
  }
}
