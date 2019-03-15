import Login from '@/view/login/login.vue'
import Main from '@/view/main.vue'

// 供应商
import gys from '@/view/gys/gys.vue'

// 人员管理
import personManagement from '@/view/person-management/person-management.vue'

export default [
    {path: '/', redirect: '/login'}, //重定向
    {path: '/login', name: 'Login', component: Login, meta: {title: '登录'}},

    {
        path: '/main', name: 'Main', component: Main,
        children: [
            {path: '/gys', name: 'gys', component: gys, meta: {title: '供应商管理'}},
            {path: '/person-management', name: 'personManagement', component: personManagement, meta: {title: '人员管理'}},
            ]
    },

    // {path: '*', name: 'NotFoundComponent', component: NotFoundComponent, meta: {title: '404'}}
]
