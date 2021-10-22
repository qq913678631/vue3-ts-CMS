import { GetterTree } from 'vuex/types/index.js'
import { ISystemState } from './type'

export const getters: GetterTree<ISystemState, any> = {
  pageListData(state) {
    return (pageName: string) => {
      return (state as any)[`${pageName}List`]
    }
  },

  pageListCount(state) {
    return (pageName: string) => {
      return (state as any)[`${pageName}Count`]
    }
  }
}
