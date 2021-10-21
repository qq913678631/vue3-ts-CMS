import { ActionTree } from 'vuex/types/index.js'
import { ISystemState } from './type'
import {
  getPageListData,
  deletePageDataById,
  createPageData,
  editPageData
} from '@/service/main/system/system'

export const actions: ActionTree<ISystemState, any> = {
  async getPageListAction({ commit }, payload: any) {
    const { data } = await getPageListData(payload.url, payload.queryInfo)
    const { list, totalCount } = data
    const pageName = payload.url.split('/')[1]
    commit(`${pageName}ListChange`, list)
    commit(`${pageName}CountChange`, totalCount)
  },

  async deletePageDataByIdAction({ dispatch }, payload: any) {
    const { url, id } = payload
    const pageUrl = `/${url}/${id}`
    await deletePageDataById(pageUrl)
    dispatch('getPageListAction', {
      url: `/${url}/list`,
      queryInfo: {
        offset: 0,
        size: 10
      }
    })
  },

  async createPageDataAction({ dispatch }, payload: any) {
    const { pageName, queryInfo } = payload
    const pageUrl = `/${pageName}`
    await createPageData(pageUrl, queryInfo)
    dispatch('getPageListAction', {
      url: `/${pageName}/list`,
      queryInfo: {
        offset: 0,
        size: 10
      }
    })
  },

  async editPageDataAction({ dispatch }, payload: any) {
    const { pageName, queryInfo, id } = payload
    const pageUrl = `/${pageName}/${id}`
    await editPageData(pageUrl, queryInfo)
    dispatch('getPageListAction', {
      url: `/${pageName}/list`,
      queryInfo: {
        offset: 0,
        size: 10
      }
    })
  }
}
