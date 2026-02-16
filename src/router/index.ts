import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/movies',
      name: 'Movies',
      component: () => import('@/views/Movies.vue'),
    },
    {
      path: '/search',
      redirect: '/movies',
    },
    {
      path: '/movie/:id',
      name: 'Movie',
      component: () => import('@/views/MovieDetails.vue'),
    },
  ],
});

export default router;
