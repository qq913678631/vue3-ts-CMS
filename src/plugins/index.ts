import { App } from 'vue'
import router from '@/plugins/router'
import store from '@/plugins/store'
import ElementPlus from 'element-plus'
import SvgIcon from './svg-icon'
import { stringUtcDateFormat } from '@/utils/date-format'

export function registerProperties(app: App) {
  app.config.globalProperties.$filter = {
    foramtTime(value: string) {
      return stringUtcDateFormat(value)
    }
  }
}

const AppPlugin = {
  install(app: App<Element>): void {
    app.use(router)
    app.use(store)
    app.use(ElementPlus)
    app.use(SvgIcon)
    app.use(registerProperties)
  }
}

export default AppPlugin
