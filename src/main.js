import { createApp } from 'vue'
import App from './App.vue'
import './main.css'
import router from './router'
import store from './store'
import { Icon } from '@iconify/vue'

createApp(App).use(router).use(store).mount('#app')
