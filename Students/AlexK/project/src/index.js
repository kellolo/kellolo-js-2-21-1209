import './styles/css/style.css';
import './styles/css/mStyle.css';

// import app from "./components";
// app();

import Vue from 'vue';
import Main from './Main.vue';

new Vue({
    render: h => h(Main),
}
).$mount('#app')