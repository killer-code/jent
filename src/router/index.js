import Vue       from 'vue'
import VueRouter from 'vue-router'

import Home       from '@/views/Home'
import Order      from '@/views/Order'
import NewOrder   from '@/views/NewOrder'
import Disclaimer from '@/views/Disclaimer'
import Instruction from '@/views/Instruction'
import HowItWorks from '@/views/HowItWorks';

import Err404     from '@/views/404'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { layout: 'general', age: true, },
  },
  {
    path: '/age',
    name: 'Disclaimer',
    component: Disclaimer,
    meta: { layout: 'empty', clear: true, },
  },
  {
    path: '/test-order',
    name: 'Order',
    component: Order,
    meta: { layout: 'default', age: true, },
  },
  {
    path: '/order',
    name: 'NewOrder',
    component: NewOrder,
    meta: { layout: 'default', age: true, },
  },
  {
    path: '/instruction',
    name: 'Instruction',
    component: Instruction,
    meta: { layout: 'default', age: true, },
  },
  {
    path: '/how-it-works',
    name: 'HowItWorks',
    component: HowItWorks,
    meta: { layout: 'default', age: true, },
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

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
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
