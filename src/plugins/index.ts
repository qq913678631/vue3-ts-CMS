import { App } from 'vue'
import router from '@/plugins/router'
import store from '@/plugins/store'
import ElementPlus from 'element-plus'
import SvgIcon from './svg-icon'

const AppPlugin = {
  install(app: App<Element>): void {
    app.use(router)
    app.use(store)
    app.use(ElementPlus)
    app.use(SvgIcon)
  }
}

export default AppPlugin
