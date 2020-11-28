import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '../store/index'


Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "layouts",
        explain: "主页面",
        component: () => import("@/layouts/index.vue"),
        children: [
            // 当 /user/:id 匹配成功，
            // UserHome 会被渲染在 User 的 <router-view> 中
            { path: '/home', component: () => import("@/view/Home/index.vue") },

            // ...其他子路由
        ]
    },
    {
        path: "/login",
        name: "login",
        explain: "登陆",
        component: () => import("@/view/login/index.vue")
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
