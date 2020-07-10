import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default.vue'
import indexPage from '@/components/page/index.vue'
// import changeCity from "@/components/page/changeCity.vue"
// import goodsList from "@/components/page/goodsList.vue"
// import login from "@/components/page/login.vue"
// import regist from "@/components/page/regist.vue"
// import { LoaderOptionsPlugin } from 'webpack'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: defaultPage,
    name: 'defaultPage',
    redirect: '/index',
    children: [
      {
        path: 'index',
        name: 'index',
        component: indexPage
      }, {
        path: 'City',
        name: 'City',
        component: () => import('@/components/page/changeCity.vue')
      }, {
        path: 'goods',
        name: 'goods',
        component: () => import('@/components/page/goodsList.vue')
      }
    ]
  }, {
    path: '/login',
    name: 'login',
    component: () => import('@/components/page/login.vue')
  }, {
    path: '/regist',
    name: 'regist',
    component: () => import('@/components/page/regist.vue')
  }]
})
