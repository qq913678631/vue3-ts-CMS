import { createStore } from 'vuex'
import { IRootState } from './type'
import login from './login/login'
import system from './system/system'

const store = createStore<IRootState>({
  state: {
    name: '1',
    age: 22
  },
  mutations: {},
  actions: {},
  modules: {
    login,
    system
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export default store
