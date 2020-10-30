/* eslint-disable no-undef */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/filtros",
    component: () =>
      import(/* webpackChunkName: "filtros" */ "../views/Filtros.vue")
  },
  {
    path: "/filtros/:departamento",
    name: "filtros",
    // route level code-splitting
    // this generates a separate chunk (filtros.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "filtros" */ "../views/Filtros.vue")
  },
  {
    path: "/resumen",
    name: "resumen",
    component: () =>
      import(/* webpackChunkName: "resumen" */ "../views/Resumen.vue")
  },
  {
    path: "/creditos",
    name: "creditos",
    component: () =>
      import(/* webpackChunkName: "creditos" */ "../views/Creditos.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
