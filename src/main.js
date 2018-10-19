// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill';
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './router'
import axios from 'axios';
import store from './vuex/store'
import $ from 'jquery'
/*import {routerMode} from './config/env'
import './config/rem'*/
// 处理移动端click事件300毫秒延迟
import FastClick from 'fastclick' 

// 有赞ui
import vant from 'vant'  
import 'vant/lib/vant-css/index.css';
import '../static/css/base.css';
var api=''
if (process.env.NODE_ENV === 'development') {
    var api = '/api'
}
//console调试 
import vConsole from 'vconsole'   


Vue.prototype.$axios=axios;
Vue.prototype.host=api;
Vue.config.productionTip = false
//var vConsole22 = new vConsole();   //开启前端调试

Vue.use(VueRouter);
Vue.use(vant);

//处理移动端click事件300毫秒延迟
if ('addEventListener' in document) {   
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

const router = new VueRouter({
	mode:'history',
	routes,
	strict: process.env.NODE_ENV !== 'production',
	scrollBehavior (to, from, savedPosition) {
	    if (savedPosition) {
		    return savedPosition
		} else {
			if (from.meta.keepAlive) {
				from.meta.savedPosition = document.body.scrollTop;
			}
		    return { x: 0, y: to.meta.savedPosition || 0 }
		}
	}
})

// 历史管理
const history = window.sessionStorage;
let historyCount = history.getItem('count') * 1;
router.beforeEach(function (to, from, next) {
  const toIndex = history.getItem(to.path);
  const fromIndex = history.getItem(from.path);
  if (toIndex) {
    if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
      store.commit('UPDATE_DIRECTION', {direction: 'forward'})
    } else {
      store.commit('UPDATE_DIRECTION', {direction: 'reverse'})
    }
  } else {
    ++historyCount;
    history.setItem('count', historyCount);
    to.path !== '/' && history.setItem(to.path, historyCount);
    store.commit('UPDATE_DIRECTION', {direction: 'forward'})
  }
  if (/\/http/.test(to.path)) {
    let url = to.path.split('http')[1];
    window.location.href = `http${url}`
  } else {
    next()
  }
});

router.afterEach((to, from, next) => {
	document.title = to.meta.title ? to.meta.title : '万讯七子' ;
	store.dispatch('setTitle',to.meta.name ? to.meta.name : '万讯七子');
	store.dispatch('setNavBool',to.meta.navBool ? to.meta.navBool : true );
	store.dispatch('setBarBool',to.meta.barBool? to.meta.barBool : true );
 })

// VueRouter.prototype.goBack = function () { 
// 　　this.isBack = true
// 　　window.history.go(-1)
// }

new Vue({
	router,
	store,
	render:h => h(App)
}).$mount('#app')