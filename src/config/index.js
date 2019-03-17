import axios from './http';
import apiUrl from './config';
import Vue from 'vue';

Vue.prototype.$api = {
    // login: () => params => axios.get(`${apiUrl}/admin/login`, params)
}


/**
 *
 *
 *  调用方式
 *  params 为object
 *  this.$api.get('login',params)
 **/
