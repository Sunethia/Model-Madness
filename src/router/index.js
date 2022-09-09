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
    path: "/usersTable",
    name: "user table",
    component: () => import("../views/usersTable.vue"),
  },
  {
    path: "/products/:id",
    name: "productDetails",
    component: () => import("../views/productDetails.vue"),
    props: true
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/Profile.vue"),
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
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/admin.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/Contact.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../views/Cart.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/Profile.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
