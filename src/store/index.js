import Vue from 'vue'
import Vuex from 'vuex'

import aside   from './modules/aside'
import cities  from './modules/cities'
import user_ip from './modules/user_ip'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    aside,
    cities,
    user_ip,
  }
})
