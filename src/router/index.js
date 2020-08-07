import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/movies/",
    name: "Movies",
    component: () => import(/* webpackChunkName: "Movies" */ "../views/Movies.vue")
  },
  {
    path: "/movie/:id",
    name: "Movie",
    component: () => import(/* webpackChunkName: "MovieDetails" */ "../views/MovieDetails.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  linkExactActiveClass: "is-active",
  routes
});

export default router;
