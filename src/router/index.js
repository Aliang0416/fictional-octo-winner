import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/components/MyLogin.vue'
import Home from '@/components/MyHome.vue'
import Goods from '@/components/menus/MyGoods.vue'
import Orders from '@/components/menus/MyOrders.vue'
import Rights from '@/components/menus/MyRights.vue'
import Settings from '@/components/menus/MySettings.vue'
import Users from '@/components/menus/MyUsers.vue'
import Detail from '@/components/user/MyUserDetail.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/login', component: Login
    },
    {
      path: '/', redirect: '/login'
    },
    {
      path: '/home',
      redirect: '/home/users',
      component: Home,
      children: [
        { path: 'goods', component: Goods },
        { path: 'orders', component: Orders },
        { path: 'rights', component: Rights },
        { path: 'settings', component: Settings },
        { path: 'users', component: Users },
        { path: 'detile/:id', component: Detail, props: true }
      ]
    }
  ]
})

router.beforeEach(function (to, from, next) {
  const pathArr = ['/home', '/home/goods', '/home/orders', '/home/rights', '/home/settings', '/home/users']
  if (pathArr.indexOf(to.path) !== -1) {
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
