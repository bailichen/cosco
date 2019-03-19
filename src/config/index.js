import axios from './http';
import apiUrl from './config';
import Vue from 'vue';

Vue.prototype.$api = {
    // login: () => params => axios.get(`${apiUrl}/admin/login`, params)
    //员工信息
    basicDatabase_personDb_getAllEmployeeList: params => axios.get('/basicDatabase/personDbController/getAllEmployeeList', params),
    basicDatabase_personDb_getOneEmployee:  params => axios.get('/basicDatabase/personDbController/getOneEmployee', params),
    basicDatabase_personDb_saveEmployee: params => axios.post('/basicDatabase/personDbController/saveEmployee', params),
    basicDatabase_personDb_updateEmployee:params => axios.post('/basicDatabase/personDbController/updateEmployee', params),

    //客户信息
    basicDatabase_clientDb_getAllCustomerList:  params => axios.get('/basicDatabase/clientDbController/getAllCustomerList', params),
    basicDatabase_clientDb_getOneCustomer:  params => axios.get('/basicDatabase/clientDbController/getOneCustomer', params),
    basicDatabase_clientDb_saveCustomer:  params => axios.post('/basicDatabase/clientDbController/saveCustomer', params),
    basicDatabase_clientDb_updateCustomer:  params => axios.post('/basicDatabase/clientDbController/updateCustomer', params),
}


/**
 *
 *
 *  调用方式
 *  params 为object
 *  this.$api.get('login',params)
 **/
