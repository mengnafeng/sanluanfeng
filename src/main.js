import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index"
import './assets/main.css'
import {messages} from './lang/messages'
import { createI18n } from 'vue-i18n'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const i18n = new createI18n({
  messages,
  locale: 'en'
})

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router)
app.use(i18n)
app.use(ElementPlus)
app.mount('#app')

