import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// axios for REST API Requests
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

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
