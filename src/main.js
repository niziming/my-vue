import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  // 启用 ElementUI
  render: h => h(App)
})
