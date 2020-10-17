import 'bootstrap/dist/css/bootstrap.min.css'
import './layout/styles/bootstrap.css'
import './layout/styles/index.css'

import Vue from 'vue'
import Main from './Main.vue'

new Vue({
    render: h => h(Main)
})
.$mount('#app');