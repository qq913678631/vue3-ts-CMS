import { ActionTree } from 'vuex/types/index.js'
import { ILoginState } from './type'
import { IUser } from '@/service/login/type'
import router from '@/plugins/router'
import localCache from '@/utils/cache'
import { userLoginRequest, getUserInfoById, getUserMenusById } from '@/service/login/login'
import { mapMenusToRoutees } from '@/utils/map-menus'

export const actions: ActionTree<ILoginState, any> = {
  async userLoginAction({ commit }, payload: IUser) {
    // 1.实现登录逻辑
    const { data } = await userLoginRequest(payload)
    const { token, id } = data
    commit('setUserToken', token)
    localCache.setCache('token', token)

    // 2.请求登录用户信息
    const { data: userInfo } = await getUserInfoById(id)
    commit('setUserInfo', userInfo)
    localCache.setCache('userInfo', userInfo)

    // 3.请求用户的菜单
    const { data: userMenus } = await getUserMenusById(id)
    commit('setUserMenus', userMenus)
    localCache.setCache('userMenus', userMenus)

    const routes = mapMenusToRoutees(userMenus)
    routes.forEach((route) => {
      router.addRoute('main', route)
    })
    router.push('/main')
  },

  loadLocalLogin({ commit }) {
    const token = localCache.getCache('token')
    if (token) {
      commit('setUserToken', token)
    }
    const userInfo = localCache.getCache('userInfo')
    if (userInfo) {
      commit('setUserInfo', userInfo)
    }
    const userMenus = localCache.getCache('userMenus')
    if (userMenus) {
      commit('setUserMenus', userMenus)
    }

    const routes = mapMenusToRoutees(userMenus)
    routes.forEach((route) => {
      router.addRoute('main', route)
    })
  }
}
