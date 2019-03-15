import axios from './http';
import apiUrl from './config';
import Vue from 'vue';

Vue.prototype.$api = {
    // login: () => params => axios.get('/admin/login', params)
}
