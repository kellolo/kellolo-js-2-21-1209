import './layout/styles/style.css';
import './layout/styles/style_secondary.css';
import './layout/styles/style_offer.css';
import './layout/styles/style_fetured.css';
import './layout/styles/style_feedback.css';
import './layout/styles/style_categories.css';
import './layout/styles/style_breadcrumbs.css'; 



import Vue from 'vue'
import Main from './Main.vue'

new Vue({
    render: h => h(Main)
})
.$mount('#app');

