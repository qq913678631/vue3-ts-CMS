import { ActionTree } from 'vuex/types/index.js'
import { ISystemState } from './type'
import { getPageListData, deletePageDataById } from '@/service/main/system/system'

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
  }
}
