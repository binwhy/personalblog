import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//安装插件
Vue.use(ElementUI);

// 引入Markdown 编辑器
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// 安装插件
Vue.use(mavonEditor)

Vue.config.productionTip = false

// 定义全局点击函数
Vue.prototype.globalClick = function (callback) {
  document.getElementById('app').onclick = function () {
    callback();
  };
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
