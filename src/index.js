import Vue from 'vue';

import router from './vue-router';

import App from './app.vue';
import './assets/css/tag-style-fix.scss';
import ElementUI from 'element-ui'; // UI组件
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/reset-css.scss'
import '@/config'
Vue.use(ElementUI);
new Vue({
    el: '#app',
    router,
    // store,
    render: h => h(App)
});
