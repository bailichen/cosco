import Login from '@/view/login/login.vue'
import Main from '@/view/main.vue'

// 基础信息库
import baseM from '@/view/base-management/baseM.vue'

// 供应商管理
import supplierM from '@/view/supplier-management/supplierM.vue'

export default [
    {path: '/', redirect: '/login'}, //重定向
    {path: '/login', name: 'Login', component: Login, meta: {title: '登录'}},

    {
        path: '/main', name: 'Main', component: Main,
        children: [
            {path: '/base-management', name: 'baseM', component: baseM, meta: {title: '基础信息库'}},
            {path: '/supplier-management', name: 'supplierM', component: supplierM, meta: {title: '供应商管理'}},
            ]
    },

    // {path: '*', name: 'NotFoundComponent', component: NotFoundComponent, meta: {title: '404'}}
]
