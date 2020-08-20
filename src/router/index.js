import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '../store/index'


Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    name:"main",
    explain:"主页面",
    component:() => import("@/view/Home/index.vue")
  },
]

const router = new VueRouter({
  // mode: 'history',
  base: __dirname,
  routes
})

router.beforeEach((to, from, next) => {
  // console.log('to',to);
  // console.log('from',from);
  next()
})

export default router
