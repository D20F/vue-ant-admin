import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import SYSTEM from './system'
import PUBLIC from './public'


const store = new Vuex.Store({
  modules: {
    system: SYSTEM,
    public: PUBLIC
  }
})

export default  store