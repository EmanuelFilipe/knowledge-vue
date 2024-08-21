import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/components/home/Home.vue";
import AdminPages from "@/components/admin/AdminPages.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/admin",
    name: "adminPages",
    component: AdminPages
  },
];

export default new VueRouter({
  mode: 'history',
  routes,
});