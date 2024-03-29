import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Viser from 'viser-vue'

import '@/styles/index.scss' // 公共 css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // 图标
import '@/permission' // 路由控制
import '@/components/index' // 全局注册组件


Vue.use(ElementUI)
Vue.use(Viser)

Vue.config.productionTip = false

import '@/directive/index' // 全局指令

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
