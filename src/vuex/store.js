import Vue from 'vue'
import Vuex from 'vuex'

import common from './modules/common'
import index from './modules/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    common
  }
})
