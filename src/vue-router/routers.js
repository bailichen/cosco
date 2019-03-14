import Login from '@/view/login/login.vue'
import Main from '@/view/main.vue'

// 首页
import Index from '@/view/index/index.vue'



export default [
    {path: '/', redirect: '/login'}, //重定向
    {path: '/login', name: 'Login', component: Login, meta: {title: '登录'}},

    {
        path: '/main', name: 'Main', component: Main,
        children: [
           {path: '/index', name: 'index', component: Index, meta: {title: '首页'}},
            ]
    },

    // {path: '*', name: 'NotFoundComponent', component: NotFoundComponent, meta: {title: '404'}}
]
