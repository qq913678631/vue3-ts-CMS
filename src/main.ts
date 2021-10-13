import { createApp } from 'vue'
import App from './App.vue'
import AppPlugin from './plugins'
import '@/theme'
import { setupStore } from '@/plugins/store/index'

const app = createApp(App)
AppPlugin.install(app)
setupStore()

app.mount('#app')
