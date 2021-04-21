import '@/scss/styles.scss'
import 'element-ui/lib/theme-chalk/index.css';

import Vue    from 'vue'
import App    from './App.vue'
import router from './router'
import store  from './store'

import VueFullPage from 'vue-fullpage.js'
import Parallax    from 'parallax-js'
import Element     from 'element-ui'
import locale      from 'element-ui/lib/locale/lang/ru-RU'

import VueMeta from 'vue-meta'
Vue.use(VueMeta)

import * as PIXI from 'pixi.js'
Vue.prototype.$PIXI = PIXI;

import anime from 'animejs/lib/anime.es'
Vue.prototype.$anime = anime;

import moment from 'moment';
import 'moment/locale/ru'

Vue.prototype.$moment = moment;
Vue.prototype.$parallax = Parallax;

Vue.config.productionTip = false

if (screen && screen.width > 560) {
  Vue.use(VueFullPage);
}

Vue.use(Element, { locale })

new Vue({
  router,
  store,
  render: h => h(App),
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  }
}).$mount('#app')
