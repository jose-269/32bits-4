import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import NotFound from "../views/NotFound.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/busquedas",
    name: "Busquedas",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "busquedas" */ "../views/Busquedas.vue"),
  },
  {
    path: "/ventas",
    name: "Ventas",
    component: () =>
      import(/* webpackChunkName: "Ventas" */ "../views/Ventas.vue"),
  },
  {
    path:  "/total",
    nombre: "Total",
    component: () =>
      import(/* webpackChunkName: "Total" */ "../views/Total.vue"),
  },
  {
    path: "*",
    component: NotFound,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
