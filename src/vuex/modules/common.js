import * as types from '../mutation-types'
import api from '../api'

const state = {//参数
    globalLoadinng: true,
    title: '',
    NavBool: true,
    barBool: true,
    direction: ''
}

const actions = {//操作命令
    setTitle: function({commit},titleData){
        commit(types.SET_TITLE, titleData)
    },
    setNavBool: function({commit},flag){
        commit(types.SET_NAV_BOOL, flag)
    },
    setBarBool: function({commit},flag){
        commit(types.SET_BAR_BOOL, flag)
    },
    setDirection: function({commit},payload){
        commit(types.UPDATE_DIRECTION,payload)
    }
}

const getters = {//读取
    getTitle: state => state.title,
    getNavBool: state => state.NavBool,
    getBarBool: state => state.barBool,
    getDirection: state => state.direction
}

const mutations = {//写
    [types.SET_TITLE](state,titleData){
        state.title = titleData;
    },
    [types.SET_NAV_BOOL](state,flag){
        state.NavBool = flag;
    },
    [types.SET_BAR_BOOL](state,flag){
        state.barBool = flag;
    },
    [types.UPDATE_DIRECTION](state,payload) {
        state.direction = payload.direction
    },
    [types.GLOBAL_SET_LOADINNG](state, flag) {
        state.globalLoadinng = flag
        if (state.globalLoadinng) {
         //接口请求loading出现
        } else {
            console.log(2)
            //接口请求完成loading消失
        }
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}