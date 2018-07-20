import Service from '~/plugins/axios'
import UaParse from '~/utils/ua-parse'
import axios from 'axios'

export const strict = false
export const actions = {

  loadLoginState ({commit}, params) {
    commit('option/SET_LOGINSTATE', params)
  },
  loadUsername ({commit}, username) {
    commit('option/SET_USERNAME', username)
  },
  loadAvator ({commit}, avator) {
    commit('option/SET_AVATOR', avator)
  },
  loadUserData ({commit}, userData) {
    commit('option/SET_USERDATA', userData)
  },
  async logining ({commit}, data) {
    commit('option/SET_USER', data)
  },
  // 登陆 //退出
  async login ({commit}, {username, password}) {
    try {
      axios.get(`/api/login?username=${username}&&password=${password}`)
        .then((res) => {
          commit('option/SET_USER', res.data)
        })
      // const {data} = axios.post(`http://data.maopingshou.com/login`, {username, password})
      // commit('option/SET_USER', data)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },
  async logout ({commit}) {
    axios.post(`/api/logout`)
    commit('option/SET_USER', null)
  }
}

// 清除数组中的空元素
function cleanArray (actual) {
  let newArray = []
  for (let i = 0; i < actual.length; i++) {
    if (actual[i]) {
      newArray.push(actual[i])
    }
  }
  return newArray
}
