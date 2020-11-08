import '@/scss/styles.scss'

import Vue    from 'vue'
import App    from './App.vue'
import router from './router'
import store  from './store'

import VueFullPage from 'vue-fullpage.js'

import * as PIXI from 'pixi.js'
Vue.prototype.$PIXI = PIXI;
import anime from 'animejs/lib/anime.es'
Vue.prototype.$anime = anime;

Vue.config.productionTip = false

Vue.use(VueFullPage);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
