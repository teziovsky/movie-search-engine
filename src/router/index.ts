import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkExactActiveClass: "is-active",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/movies",
      name: "Movies",
      component: () => import("@/views/Movies.vue"),
    },
    {
      path: "/search",
      redirect: { name: "Movies" },
    },
    {
      path: "/movie/:id",
      name: "Movie",
      component: () => import("@/views/MovieDetails.vue"),
    },
  ],
});

export default router;
