import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/products",
    name: "products",
    component: () => import("../views/products.vue"),
  },
  {
    path: "/products/:id",
    name: "productDetails",
    component: () => import("../views/productDetails.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/register.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
