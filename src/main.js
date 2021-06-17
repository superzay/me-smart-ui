import Vue from 'vue'
import App from './App.vue'
import 'src/assets/css/base.css'
import 'src/assets/css/iconfont/iconfont.css'
import MeSmartUi from './package/index.js' // 测试源码
Vue.use(MeSmartUi)

window.model = new Vue({
  el: '#app',
  render: h => h(App)
})
