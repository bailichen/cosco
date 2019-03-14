import axios from 'axios'
import { Message, Loading } from 'element-ui'
import Url from './config'

const instance = axios.create({
    baseURL: Url.API_URL,
    timeout: 30000,
    withCredentials: true,
    headers: {
        'Content-type': 'application/json;charset=utf-8'
    }
})
//请求拦截器
instance.interceptors.request.use(
    config => {
        if (localStorage.getItem('token')) {
            config.headers.Authorization = localStorage.getItem('token')
        }
        config.withCredentials = true
        return config
    },
    error => {
        // 对请求错误做些什么
        Message({
            message: '应用网络异常，请重试',
            customClass: 'errorpart',
            type: 'error'
        })
        return Promise.reject(error)
    }
)

// 返回拦截器
instance.interceptors.response.use(
    response => {
        // 对响应数据做点什么
        //token过时处理
        const newToken = response.headers.Authorization || ''
        if (newToken !== '') {
            localStorage.setItem('token', newToken)
        }

        //特定code拦截
        if (response.data.code === 0) {
            return Promise.resolve(response.data)
        } else if ([262707].indexOf(response.data.code) !== -1) {
            // 特殊code做过滤处理
            return Promise.resolve(response.data)
        } else {
            Message({
                message: response.data.msg,
                customClass: 'errorpart',
                type: 'error'
            })
            if (response.data.code == 262109) {
                window.vue.$router.push('login')
            }
            return Promise.reject(response)
        }
    },
    error => {
        let { message } = error
        Message.error({
            type: 'info',
            message
        })
        switch (error.response && error.response.status) {
            // 如果响应中的 http code 为 401，那么则此用户可能 token 失效了之类的，我会触发 logout 方法，清除本地的数据并将用户重定向至登录页面
            case 401:
                localStorage.removeItem('token')
                break
            // 如果响应中的 http code 为 400，那么就弹出一条错误提示给用户
            case 400:
                Message.error(error.response.data.error)
                break
        }
        return Promise.reject(error)
    }
)

export default instance
