import Home from "@/views/Home.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: "is-active",
  routes: [
    {
      path: "/movie-search-engine/",
      name: "Home",
      component: Home,
    },
    {
      path: "/movie-search-engine/movies",
      name: "Movies",
      component: () => import("@/views/Movies.vue"),
    },
    {
      path: "/movie-search-engine/search",
      redirect: { name: "Movies" },
    },
    {
      path: "/movie-search-engine/movie/:id",
      name: "Movie",
      component: () => import("@/views/MovieDetails.vue"),
    },
  ],
});

export default router;
