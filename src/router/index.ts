import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/index",
    name: "index",
    component: HomeView,
  },
  {
    path: "/user/login",
    name: "login",
    component: import("@/views/user/LoginView.vue"),
  },
  {
    path: "/user/register",
    name: "register",
    component: import("@/views/user/RegisterView.vue"),
  },
  {
    path: "/admin/management",
    name: "management",
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
