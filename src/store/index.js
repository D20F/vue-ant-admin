import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import PUKE from './poker'
import PUBLIC from './public'


const store = new Vuex.Store({
  modules: {
    poker: PUKE,
    public: PUBLIC
  }
})

export default  store