/**
import * as axios from 'axios'

let options = {}
// The server-side needs a full url to works
if (process.server) {
  options.baseURL = `http://localhost:3000`
}

export default axios.create(options)
**/

import Vue from 'vue'
import axios from 'axios'

const service = axios.create({
  baseURL: '/api'
})

Vue.prototype.$ajax = axios
export default service
