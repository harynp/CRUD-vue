// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import SuiVue from "semantic-ui-vue";
import "semantic-ui-css/semantic.min.css";
import App from "./App";
import router from "./router";

import store from "./vuex/store";

Vue.config.productionTip = false;
Vue.use(SuiVue);
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
