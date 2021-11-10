import { createStore } from 'vuex'
import { IRootState } from './type'
import login from './login/login'
import system from './system/system'
import dashboard from './analysis/dashboard'
import { getPageListData } from '@/service/main/system/system'

const store = createStore<IRootState>({
  state: {
    entireDepartment: [],
    entireRole: [],
    entireMenu: []
  },
  mutations: {
    changeEntireDepartment(state, departmentList: any[]) {
      state.entireDepartment = departmentList
    },

    changeEntireRole(state, roleList: any[]) {
      state.entireRole = roleList
    },

    changeEntireMenu(state, menuList: any[]) {
      state.entireMenu = menuList
    }
  },
  actions: {
    async getInitialDataAction({ commit }) {
      // 1.请求部门角色数据
      const { data: departmentData } = await getPageListData('/department/list', {
        offset: 1,
        size: 1000
      })
      const { data: roleData } = await getPageListData('/role/list', { offset: 1, size: 1000 })
      const { data: menuData } = await getPageListData('menu/list', {})
      // 2.保存数据
      commit('changeEntireDepartment', departmentData.list)
      commit('changeEntireRole', roleData.list)
      commit('changeEntireMenu', menuData.list)
    }
  },
  modules: {
    login,
    system,
    dashboard
  }
})

export function setupStore() {
  // store.dispatch('login/loadLocalLogin')
  // store.dispatch('getInitialDataAction')
}

export default store
