import Vue from 'vue'
import Router from 'vue-router'
import Home1 from './views/Home1.vue'

Vue.use(Router)

export default new Router({
  routes: [
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    {path: '/', name: 'home1', component: Home1},
    {path: '/about', name: 'about',component: () => import(/* webpackChunkName: "about" */ './views/About.vue')},
    //  登录
    {path: '/login', name: 'login',component: () => import(/* webpackChunkName: "login" */ './views/login.vue')},
    //  首页
    {path: '/home', name: 'home',component: () => import(/* webpackChunkName: "home" */ './views/home.vue')},
  ]
})
