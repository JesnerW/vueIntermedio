import './assets/main.css'
import { VueQueryPlugin } from '@tanstack/vue-query'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'



const app = createApp(App)

VueQueryPlugin.install(app, {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        cacheTime: 1000 * 120,
        refetchOnReconnect: 'always',
        
      }
    }
  }
})

app.use(router)
app.use(VueQueryPlugin)
app.mount('#app')
