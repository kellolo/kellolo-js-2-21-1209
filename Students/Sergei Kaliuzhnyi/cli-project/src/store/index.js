import Vue from 'vue'
import Vuex from 'vuex'
import Basket from './modules/basket.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Basket
  }
})
