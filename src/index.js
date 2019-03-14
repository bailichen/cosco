import Vue from 'vue';

import router from './vue-router';
// import store from './packages/vuex';

// import './packages/maple-request';

// import './resources/components';
// import './resources/plugins';
// import './resources/directive';

// import './transactions/vuex-timers';

import App from './app.vue';
import './assets/css/tag-style-fix.scss';
import ElementUI from 'element-ui'; // UI组件
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/reset-css.scss'
Vue.use(ElementUI);
new Vue({
    el: '#app',
    router,
    // store,
    render: h => h(App)
});
