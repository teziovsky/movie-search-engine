<template>
  <section class="page-shell flex items-center justify-center">
    <article v-if="movie" class="glass-panel w-full max-w-5xl overflow-hidden">
      <div class="grid gap-4 p-4 md:grid-cols-[280px_1fr] md:gap-6 md:p-6">
        <img
          :alt="`${movie.title} poster`"
          :src="posterUrl"
          class="h-auto w-full rounded-2xl border border-slate-200/80 object-cover md:max-h-[420px]"
        />

        <div class="flex flex-col gap-3">
          <div>
            <span class="chip">Movie profile</span>
            <h2 class="mt-2 text-3xl font-bold text-slate-900">{{ movie.title }}</h2>
          </div>

          <p class="text-sm text-slate-600">
            <span class="font-bold text-slate-900">Genre:</span>
            {{ arrayJoin(movie.genres) }}
          </p>
          <p class="text-sm text-slate-600">
            <span class="font-bold text-slate-900">Production countries:</span>
            {{ arrayJoin(movie.production_countries) }}
          </p>
          <p class="text-sm text-slate-600">
            <span class="font-bold text-slate-900">Popularity:</span>
            {{ movie.popularity }}
          </p>
          <p class="text-sm text-slate-600">
            <span class="font-bold text-slate-900">Votes:</span>
            {{ movie.vote_count }}
          </p>
          <p class="text-sm text-slate-600">
            <span class="font-bold text-slate-900">Vote average:</span>
            {{ movie.vote_average }}
          </p>
          <a
            :href="`https://www.themoviedb.org/movie/${movie.id}`"
            class="action-btn mt-2 inline-flex w-fit px-4 py-2"
            rel="noopener noreferrer"
            target="_blank"
          >
            Open on TMDB
          </a>
        </div>
      </div>

      <div class="border-t border-slate-200/80 px-4 py-5 md:px-6">
        <p class="text-sm leading-7 text-slate-700">
          <span class="font-bold text-slate-900">Overview:</span>
          {{ movie.overview || 'No overview available for this title.' }}
        </p>
      </div>
    </article>

    <div v-else class="surface-tint rounded-xl px-4 py-3 text-sm font-medium text-slate-700">Loading...</div>
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import noImg from '@/assets/no-img.jpg';
import { useMoviesStore } from '@/stores/movies';
import type { Genre, ProductionCountry } from '@/types/movie';

const route = useRoute();
const store = useMoviesStore();
const { selectedMovie: movie } = storeToRefs(store);

const posterUrl = computed(() => {
  if (!movie.value?.poster_path) {
    return noImg;
  }

  return `https://image.tmdb.org/t/p/w500/${movie.value.poster_path}`;
});

const arrayJoin = (array?: Genre[] | ProductionCountry[]) => {
  if (!array || array.length === 0) {
    return 'N/A';
  }

  return array.map((item) => item.name).join(', ');
};

onMounted(async () => {
  await store.fetchSelectedMovie(route.params.id as string);
});
</script>
