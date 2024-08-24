import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/components/home/Home.vue";
import AdminPages from "@/components/admin/AdminPages.vue";
import ArticlesByCategory from "@/components/article/ArticlesByCategory.vue";
import ArticleById from "@/components/article/ArticleById.vue";
import Auth from "@/components/auth/Auth.vue";
//import { userKey } from "@/global";

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
    component: AdminPages,
    meta: { requiresAdmin: true }
  },
  {
    path: "/categories/:id/articles",
    name: "articlesByCategory",
    component: ArticlesByCategory
  },
  {
    path: "/articles/:id",
    name: "articleById",
    component: ArticleById
  },
  {
    path: "/auth",
    name: "auth",
    component: Auth
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

// router.beforeEach((to, from, next) => {
//   const json = localStorage.getItem(userKey)

//   if(to.matched.some(record => record.meta.requiresAdmin)) {
//       const user = JSON.parse(json)
//       user && user.admin ? next() : next({ path: '/' })
//   } else {
//       next()
//   }
// })

export default router