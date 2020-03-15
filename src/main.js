import Vue from 'vue'
import App from './App.vue'
import './style/base.less'
import './style/iconfont.less'
import 'lib-flexible'
import router from './router'

import HmHeader from './components/HmHeader.vue'
import HmLogo from './components/HmLogo.vue'
import HmButton from './components/HmButton.vue'
import HmInput from './components/HmInput.vue'
import axios from 'axios'
import { Toast } from 'vant'
Vue.use(Toast)
axios.defaults.baseURL = 'http://localhost:3000'
Vue.prototype.$axios = axios

Vue.component('HmInput', HmInput)
Vue.component('HmButton', HmButton)
Vue.component('HmLogo', HmLogo)
Vue.component('HmHeader', HmHeader)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
