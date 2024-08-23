import 'font-awesome/css/font-awesome.css'
import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import './config/msgs'
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

require('axios').defaults.headers.common['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkZpbGlwZSB0ZXN0ZSIsImVtYWlsIjoiZmlsaXBlQHRlc3RlLmNvbS5iciIsImFkbWluIjp0cnVlLCJpYXQiOjE3MjQzNTEwNzEsImV4cCI6MTcyNDYxMDI3MX0.PLk0DGVHLaj1jt0-B1lDeSuPgpiLa3K_YHAlYFkm7BU'

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
