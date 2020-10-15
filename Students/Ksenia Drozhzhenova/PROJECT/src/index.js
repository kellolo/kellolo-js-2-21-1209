import "bootstrap/dist/css/bootstrap.min.css";
import "./layouts/styles/style.css";

import Vue from "vue";
import Main from "./Main.vue";

new Vue({
  render: (h) => h(Main),
}).$mount("#app");
