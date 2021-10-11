import { createApp } from 'vue'
import App from './App.vue'
import AppPlugin from './plugins'
import '@/theme'

const app = createApp(App)
AppPlugin.install(app)

app.mount('#app')
