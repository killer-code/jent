import Vue from 'vue'
import Vuex from 'vuex'

import aside      from './modules/aside'
import order      from './modules/order'
import cities     from './modules/cities'
import user_ip    from './modules/user_ip'
import pharmacy   from './modules/pharmacy'
import map_style  from './modules/map-style'
import speciality from './modules/speciality'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    aside,
    order,
    cities,
    user_ip,
    pharmacy,
    map_style,
    speciality,
  }
})
