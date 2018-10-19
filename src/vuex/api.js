/**
 * axios接口大全
 * api配置
 */

import store from './store'
import * as types from './mutation-types'
import axios from 'axios'

var config = require('../../config')
var url = process.env.NODE_ENV !== 'production' ? '/static/api/' : config.build.assetsPublicPath + config.build.assetsSubDirectory + '/api/'
// 请求的时候实现一个loading拦截器,不然每次都要在对应的文件写开loading和关loading
axios.interceptors.request.use(
  config => {
    store.commit(types.GLOBAL_SET_LOADINNG, true)
    return config;
  },
  err => {
    return Promise.reject(err);
  }
)
axios.interceptors.response.use(
  response => {
    store.commit(types.GLOBAL_SET_LOADINNG, false)
    return response;
  },
  err => {
    return Promise.reject(err);
  }
)
export default {

  getIndexData: function ({commit}, payload) { //首页
   

  }
  


}
