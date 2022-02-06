import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//清除默认样式
import '@/assets/css/reset.css'
//组件自动注册
import installComponent from './plugins/installComponent'
Vue.use(installComponent)
//elementui
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.config.productionTip = false
Vue.use(ElementUI);

//api
import api from './api'
Vue.prototype.$api=api
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
