import Vue       from 'vue'
import VueRouter from 'vue-router'

import Home         from '@/views/Home'
import WebAR        from '@/views/WebAR'
import NewOrder     from '@/views/NewOrder'
import GiveMoney    from '@/views/GiveMoney'
import Disclaimer   from '@/views/Disclaimer'
import HowItWorks   from '@/views/HowItWorks'
import Instruction  from '@/views/Instruction'
import PersonalData from '@/views/PersonalData'

import Test  from '@/views/Test'
import Test2 from '@/views/Test2'
import Test3 from '@/views/Test3'
import Test4 from '@/views/Test4'
import Test5 from '@/views/Test5'
import Test6 from '@/views/Test6'

import Err404     from '@/views/404'

Vue.use(VueRouter)

const SITE_NAME = 'Jent'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { 
      layout: 'general', 
      title: `${SITE_NAME} - Главна`,
      age: true,
    },
  },
  {
    path: '/test',
    name: 'Test',
    component: Test,
    meta: { 
      layout: 'empty', 
      title: `${SITE_NAME} - Главна`,
      age: true,
    },
  },
  {
    path: '/test-2',
    name: 'Test2',
    component: Test2,
    meta: { 
      layout: 'empty', 
      title: `${SITE_NAME} - Главна`,
      age: true,
    },
  },
  {
    path: '/test-3',
    name: 'Test3',
    component: Test3,
    meta: { 
      layout: 'empty', 
      title: `${SITE_NAME} - Главна`,
    },
  },
  {
    path: '/test-4',
    name: 'Test4',
    component: Test4,
    meta: { 
      layout: 'empty', 
      title: `${SITE_NAME} - Главна`,
      age: true,
    },
  },
  {
    path: '/test-5',
    name: 'Test5',
    component: Test5,
    meta: { 
      layout: 'empty', 
      title: `${SITE_NAME} - Главна`,
      age: true,
    },
  },
  {
    path: '/test-6',
    name: 'Test6',
    component: Test6,
    meta: { 
      layout: 'empty', 
      title: `${SITE_NAME} - Главна`,
      age: true,
    },
  },
  {
    path: '/age',
    name: 'Disclaimer',
    component: Disclaimer,
    meta: { 
      layout: 'empty', 
      title: `${SITE_NAME}`,
      clear: true, 
    },
  },
  {
    path: '/order',
    name: 'NewOrder',
    component: NewOrder,
    meta: { 
      layout: 'default', 
      title: `${SITE_NAME} - Заказ`,
      age: true, 
    },
  },
  {
    path: '/moneyback',
    name: 'GiveMoney',
    component: GiveMoney,
    meta: { 
      layout: 'default', 
      title: `${SITE_NAME} - Возврат средств`,
      age: true, 
    },
  },
  {
    path: '/instruction',
    name: 'Instruction',
    component: Instruction,
    meta: { 
      layout: 'static', 
      title: `${SITE_NAME} - Инструкция`,
      age: true, 
    },
  },
  {
    path: '/how-it-works',
    name: 'HowItWorks',
    component: HowItWorks,
    meta: { 
      layout: 'static', 
      title: `${SITE_NAME} - Как работает`,
      age: true, 
    },
  },
  {
    path: '/webar',
    name: 'WebAR',
    component: WebAR,
    meta: { 
      layout: 'static', 
      title: `${SITE_NAME} - WebAR`,
      age: true, 
    },
  },
  {
    path: '/personal-data',
    name: 'PersonalData',
    component: PersonalData,
    meta: { 
      layout: 'static', 
      age: true, 
    },
  },
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

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.age)) {
    const isOld = localStorage.getItem('old');
    if ( isOld ) {
      next();
    } else { next('/age') }
  } else if (to.matched.some(record => record.meta.clear)) {
    const isOld = localStorage.getItem('old');
    if ( !isOld ) {
      next();
    } else { next('/') }
  } else {
    next();
  }
})

export default router
