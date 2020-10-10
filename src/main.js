import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// axios for REST API Requests
import axios_instance from '@/config/http'
Vue.prototype.$axios = axios_instance;

// Buefy UI framework (Bulma)
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
