import '@/scss/styles.scss'
import 'element-ui/lib/theme-chalk/index.css';

import Vue    from 'vue'
import App    from './App.vue'
import router from './router'
import store  from './store'

import VueFullPage from 'vue-fullpage.js'
import Element     from 'element-ui'



import * as PIXI from 'pixi.js'
Vue.prototype.$PIXI = PIXI;

Vue.config.productionTip = false

Vue.use(VueFullPage);
Vue.use(Element)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
