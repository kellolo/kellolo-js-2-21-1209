import './layout/styles/css/styles.css'

import Vue from "vue";
import Main from "./Main.vue"

new Vue({
    render: h => h(Main)
})
.$mount('#app');