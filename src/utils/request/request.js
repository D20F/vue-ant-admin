


import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// 使用线上地址 去vue.config配置 反向代理的地址
// 线上地址
// const URL =  'http://101.132.174.237:8075'
// 本地测试地址
// const URL = 'http://192.168.2.222:8075'
// 在 vueConfig 内配置了反向代理
const URL = ''
const service = axios.create({
    baseURL: URL,
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 5000,
    headers: {
        'tokenType': 1,
    }
})

// 发送前拦截器
service.interceptors.request.use(
    config => {
        if (store.getters.token) {
            config.headers['token'] = getToken('admin_token')
            config.headers['userId'] = getToken('userId')
        }
        return config
    },
    error => {
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

service.interceptors.response.use(

    response => {
        const res = response.data

        // console.log('axiosuse', res)

        // 状态码报错
        if (res.status !== 200) {
            Message({
                message: res.message || 'Error',
                type: 'error',
                duration: 5 * 1000
            })

            // 错误代码直接退出登陆
            if (res.status === 50008 || res.status === 50012 || res.status === 50014) {
                MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
                    confirmButtonText: 'Re-Login',
                    cancelButtonText: 'Cancel',
                    type: 'warning'
                }).then(() => {
                    // 退出 暂不启用
                })
            }
            return Promise.reject(new Error(res.message || 'Error'))
        } else {
            return res
        }
    },
    error => {
        console.log('err' + error) // for debug
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error)
    }
)

export const postData = (url, data) => {
    return new Promise((resolve, reject) => {
        service({ url, data, method: 'post' })
            .then(res => {
                resolve(res.data)
            })
            .catch(err => reject(err))
    })
}

export const getData = (url, params) => {
    return new Promise((resolve, reject) => {
        service({ url, params, method: 'get' })
            .then(res => resolve(res.data))
            .catch(err => reject(err))
    })
}
export const putData = (url, data) => {
    return new Promise((resolve, reject) => {
        service({ url, data, method: 'put' })
            .then(res => resolve(res.data))
            .catch(err => reject(err))
    })
}
export const deleteData = (url, params) => {
    return new Promise((resolve, reject) => {
        service({ url, params, method: 'DELETE' })
            .then(res => resolve(res.data))
            .catch(err => reject(err))
    })
}
