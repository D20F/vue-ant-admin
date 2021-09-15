import { login,adminUserInfoOwn } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'
import { root } from '@/router/routerConfig'

const getDefaultState = () => {
    return {
        token: getToken('admin_token'),
        userId: getToken('userId'),
        name: '',
        avatar: '',
        routerOption: [] // router 路由

    }
}

const state = getDefaultState()

const mutations = {
    RESET_STATE: (state) => {
        Object.assign(state, getDefaultState())
    },
    SET_TOKEN: (state, data) => {
        state.token = data
    },
    SET_USERID: (state, data) => {
        state.userId = data
    },
    SET_NAME: (state, data) => {
        state.name = data
    },
    SET_AVATAR: (state, data) => {
        state.avatar = data
    },
    CHANGE_ROUTER: (state, data) => {
        state.routerOption = data
    }
}

const actions = {
    // 登陆
    login({ commit }, userInfo) {
        const { username, password } = userInfo
        return new Promise((resolve, reject) => {
            login({ username: username.trim(), password: password }).then(res => {
                console.log('login',res)
                commit('SET_TOKEN', res.token.accessToken)
                setToken('admin_token', res.token.accessToken)
                commit('SET_USERID', res.token.userId)
                setToken('userId', res.token.userId)

                resolve(res)
            }).catch(error => {
                reject(error)
            })
        })
    },

    // 获取账号信息  同时肩负判断token是否过期
    getInfo({ commit, state }) {
        return new Promise((resolve, reject) => {
            adminUserInfoOwn().then(res => {
                if (!res) {
                    return reject('Verification failed, please Login again.')
                }
                // console.log('getInfo',res);

                // 获取权限路由
                // let data = []
                // const { permissions } = res

                // if (permissions.module.length !== 0) {
                //     for (const i of permissions.module) {
                //         data = data.concat(ALL[i])
                //     }
                // }
                // data = data.concat(ALL[permissions.role])
                // commit('CHANGE_ROUTER', data)

                commit('CHANGE_ROUTER', root)

                const { name } = res
                commit('SET_NAME', name)
                commit('SET_AVATAR', '')// 没有头像空 默认
                resolve(res)
            }).catch(error => {
                reject(error)
            })
        })
    },

    // 账号登出
    logout({ commit, state }) {
        return new Promise((resolve, reject) => {
            removeToken('userId') 
            removeToken('admin_token')
            resetRouter()
            commit('RESET_STATE')
            resolve()
        })
    },

}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}

