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
    path: "/congreso",
    component: () =>
      import(/* webpackChunkName: "congreso" */ "../views/Congreso.vue")
  },
  {
    path: "/congreso/:departamento",
    name: "congreso",
    // route level code-splitting
    // this generates a separate chunk (congreso.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "filtros" */ "../views/Congreso.vue")
  },
  {
    path: "/presidencia",
    name: "presidencia",
    component: () =>
      import(/* webpackChunkName: "filtros" */ "../views/Presidencia.vue")
  },
  {
    path: "/partidos/:partido",
    name: "partidos",
    // route level code-splitting
    // this generates a separate chunk (partidos.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "partidos" */ "../views/Partidos.vue")
  },
  {
    path: "/regiones",
    name: "regiones",
    component: () =>
      import(/* webpackChunkName: "regiones" */ "../views/Regiones.vue")
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
