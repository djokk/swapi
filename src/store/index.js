import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'

//Vuex modules
import people from './modules/people'

Vue.use(Vuex)

let myStore = new Vuex.Store({
  useStrict: true,
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    people
  }
})

// Mount axios instance into store
import axios_instance from '@/config/http'
myStore.$axios = axios_instance;

export default myStore
