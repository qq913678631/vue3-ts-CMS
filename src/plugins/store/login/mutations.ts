import { MutationTree } from 'vuex/types/index.js'
import { ILoginState } from './type'
import { mapMenusToPermissions } from '@/utils/map-menus'

export const mutations: MutationTree<ILoginState> = {
  setUserToken(state, token: string) {
    state.token = token
  },

  setUserInfo(state, userInfo: any) {
    state.userInfo = userInfo
  },

  setUserMenus(state, userMenus: any) {
    state.userMenus = userMenus

    // 获取用户按钮权限
    const permissions = mapMenusToPermissions(userMenus)
    state.permissions = permissions
  }
}
