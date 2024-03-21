import './assets/main.css'
import store from './store'; // 引入 Vuex store
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// main.ts
import 'virtual:uno.css'


const app = createApp(App)


app.use(router)
app.use(ElementPlus)
app.use(store)

app.mount('#app')



