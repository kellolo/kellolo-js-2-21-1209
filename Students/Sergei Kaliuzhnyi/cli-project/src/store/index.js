import Vue from 'vue'
import Vuex from 'vuex'
import Basket from './modules/basket.js'
import Catalog from './modules/catalog.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Basket, Catalog
  }
})
