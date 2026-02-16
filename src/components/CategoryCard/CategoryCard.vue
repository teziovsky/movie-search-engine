<template>
  <section class="glass-panel overflow-hidden">
    <div class="flex items-center justify-between border-b border-slate-200/70 px-4 py-3 md:px-5">
      <h2 class="text-xl font-bold text-slate-900">{{ title }}</h2>
      <span class="chip">Top Picks</span>
    </div>
    <div class="px-4 py-4 md:px-5 md:py-5">
      <div class="movie-lane flex snap-x snap-mandatory flex-nowrap gap-3 overflow-x-auto pb-2 pr-4">
        <MovieCard v-for="movie in category" :key="movie.id" :movie="movie" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import MovieCard from '@/components/CategoryCard/MovieCard.vue';
import type { Movie } from '@/types/movie';

defineProps<{
  title: string;
  category: Movie[];
}>();
</script>
