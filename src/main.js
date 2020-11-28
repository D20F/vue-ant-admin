import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'
import "./util/rem.js"

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.config.productionTip = false;

Vue.use(Antd);



import component_plugins from './components/plugins'
Vue.use(component_plugins);

Vue.config.productionTip = false

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')
