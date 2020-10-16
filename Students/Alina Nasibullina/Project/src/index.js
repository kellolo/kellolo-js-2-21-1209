import 'bootstrap/dist/css/bootstrap.min.css'
import './layout/styles/style.css'

import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import Main from './Main.vue'

new Vue({
    render: h => h(Main)
})
.$mount('#app');