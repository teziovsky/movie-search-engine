<template>
  <router-link
    :to="`/movie/${movie.id}`"
    class="group flex h-full min-h-[208px] w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-white/85 shadow-[0_18px_35px_rgba(42,63,103,0.13)] transition duration-200 hover:-translate-y-1.5 hover:shadow-[0_24px_42px_rgba(42,63,103,0.2)]"
  >
    <div class="w-[45%]">
      <img
        :alt="`${movie.title} poster picture`"
        :src="posterUrl"
        class="h-full w-full object-cover"
        @error="defaultImg"
      />
    </div>
    <div class="flex w-[55%] flex-col justify-between p-4">
      <div>
        <p class="chip mb-2 w-fit px-2 py-1 text-[10px]">TMDB</p>
        <h6
          class="line-clamp-2 text-base font-bold leading-tight text-slate-900"
        >
          {{ movie.title }}
        </h6>
      </div>
      <div class="mt-4 space-y-1 text-xs font-medium text-slate-600">
        <p>Popularity: {{ movie.popularity }}</p>
        <p>Votes: {{ movie.vote_count }}</p>
        <p v-if="movie.release_date">Release: {{ movie.release_date }}</p>
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import noImg from '@/assets/no-img.jpg';
import type { Movie } from '@/types/movie';

const props = defineProps<{
  movie: Movie;
}>();

const posterUrl = computed(() => {
  if (!props.movie.poster_path) {
    return noImg;
  }

  return `https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`;
});

const defaultImg = (event: Event) => {
  const target = event.target as HTMLImageElement;
  target.src = noImg;
};
</script>
