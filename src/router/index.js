import Vue       from 'vue'
import VueRouter from 'vue-router'

import Home         from '@/views/Home'
import WebAR        from '@/views/WebAR'
import NewOrder     from '@/views/NewOrder'
import GiveMoney    from '@/views/GiveMoney'
import HowItWorks   from '@/views/HowItWorks'
import HomeStatic   from '@/views/HomeStatic'
import Instruction  from '@/views/Instruction'
import PersonalData from '@/views/PersonalData'

import Err404     from '@/views/404'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { 
      layout: 'general', 
      // age: true,
    },
  },
  {
    path: '/static',
    name: 'HomeStatic',
    component: HomeStatic,
    meta: { 
      layout: 'light', 
    },
  },
  // {
  //   path: '/age',
  //   name: 'Disclaimer',
  //   component: Disclaimer,
  //   meta: { 
  //     layout: 'empty', 
  //     clear: true, 
  //   },
  // },
  // {
  //   path: '/order',
  //   name: 'NewOrder',
  //   component: NewOrder,
  //   meta: { 
  //     layout: 'default', 
  //     title: `${SITE_NAME} - Заказ`,
  //     age: true, 
  //   },
  // },
  // {
  //   path: '/moneyback',
  //   name: 'GiveMoney',
  //   component: GiveMoney,
  //   meta: { 
  //     layout: 'default', 
  //     title: `${SITE_NAME} - Возврат средств`,
  //     age: true, 
  //   },
  // },
  {
    path: '/instruction',
    name: 'Instruction',
    component: Instruction,
    meta: { 
      layout: 'static', 
    },
  },
  {
    path: '/how-it-works',
    name: 'HowItWorks',
    component: HowItWorks,
    meta: { 
      layout: 'static',  
    },
  },
  {
    path: '/webar',
    name: 'WebAR',
    component: WebAR,
    meta: { 
      layout: 'static', 
    },
  },
  // {
  //   path: '/personal-data',
  //   name: 'PersonalData',
  //   component: PersonalData,
  //   meta: { 
  //     layout: 'static', 
  //     age: true, 
  //   },
  // },
  {
    path: '/404',
    name: 'Err404',
    component: Err404,
    meta: { layout: 'empty' },
  },
  {
    path: '*',
    redirect: '/404'
  }
]

// DEV
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: function (to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash, offset : { x: 0, y: 550 } }
    } else {
      return { x: 0, y: 0 }
    }
  },
})

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.age)) {
//     const isOld = localStorage.getItem('old');
//     if ( isOld ) {
//       next();
//     } else { next('/age') }
//   } else if (to.matched.some(record => record.meta.clear)) {
//     const isOld = localStorage.getItem('old');
//     if ( !isOld ) {
//       next();
//     } else { next('/') }
//   } else {
//     next();
//   }
// })

export default router
