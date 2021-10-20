import { MutationTree } from 'vuex/types/index.js'
import { ISystemState } from './type'

export const mutations: MutationTree<ISystemState> = {
  usersListChange(state, usersList: any[]) {
    state.usersList = usersList
  },

  usersCountChange(state, usersCount: number) {
    state.usersCount = usersCount
  },

  roleListChange(state, roleList: any[]) {
    state.roleList = roleList
  },

  roleCountChange(state, roleCount: number) {
    state.roleCount = roleCount
  },

  goodsListChange(state, goodsList: any[]) {
    state.goodsList = goodsList
  },

  goodsCountChange(state, goodsCount: number) {
    state.goodsCount = goodsCount
  },

  menuListChange(state, menuList: any[]) {
    state.menuList = menuList
  },

  menuCountChange(state, menuCount: number) {
    state.menuCount = menuCount
  }
}
