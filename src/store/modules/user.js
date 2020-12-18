import { login, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'
import { ALL } from '@/router/routerConfig'

const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
    avatar: '',
    routerOption: [], //router 路由

  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  CHANGE_ROUTER: (state, value) => {
    state.routerOption = value
  }
}

const actions = {
  // 登陆
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password }).then(res => {
        commit('SET_TOKEN', res.token)
        setToken(res.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // 获取账号信息  同时肩负判断token是否过期
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(res => {
        if (!res) {
          return reject('Verification failed, please Login again.')
        }

        // 获取权限路由
        let data = [];
        const { permissions } = res

        if(permissions.module.length !== 0){
            for (let i of permissions.module) {
                data = data.concat(ALL[i])
            }
        }
        data = data.concat(ALL[permissions.role])
        
        commit('CHANGE_ROUTER', data)


        const { name, avatar } = res
        commit('SET_NAME', name)
        commit('SET_AVATAR', avatar)
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // 账号登出
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
        removeToken() // must remove  token  first
        resetRouter()
        commit('RESET_STATE')
        resolve()
    })
  },

  // 清除 token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

