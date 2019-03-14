import Vue from 'vue';
import Router from 'vue-router';
// import { Message } from 'element-ui';

import routers from './routers';

Vue.use(Router);

const vueRouter = new Router({
    mode: 'history',
    routes: routers,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    }
});

vueRouter.beforeEach((to, from, next) => {
    document.title = to.meta.title; //title修改
    if (to.path == '/login') {
        localStorage.clear();
        next();
    } else {
        // if(!localStorage.getItem('token')){
        //     next('login')
        // }
        next();
    }
});

export default vueRouter;
