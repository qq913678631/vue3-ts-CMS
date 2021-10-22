import { createApp } from 'vue'
import App from './App.vue'
import AppPlugin from './plugins'
import '@/theme'
import { setupStore } from '@/plugins/store/index'

const app = createApp(App)
// 动态添加路由
setupStore()
AppPlugin.install(app)

app.mount('#app')
