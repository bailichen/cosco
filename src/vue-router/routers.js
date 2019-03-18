import Login from '@/view/login/login.vue'
import Main from '@/view/main.vue'

// 基础信息库
import baseM from '@/view/base-management/baseM.vue'

// 供应商
import supplierP from '@/view/supplier-management/supplierP.vue'

export default [
    {path: '/', redirect: '/login'}, //重定向
    {path: '/login', name: 'Login', component: Login, meta: {title: '登录'}},

    {
        path: '/main', name: 'Main', component: Main,
        children: [
            {path: '/base-management', name: 'baseM', component: baseM, meta: {title: '基础信息库'}},
            {path: '/supplier-management', redirect: '/supplier'}, //重定向
            {path: '/supplier', name: 'supplierP', component: supplierP, meta: {title: '供应商管理'}},
            ]
    },

    // {path: '*', name: 'NotFoundComponent', component: NotFoundComponent, meta: {title: '404'}}
]
