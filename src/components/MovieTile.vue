<template>
  <router-link
    :to="{ name: 'Movie', params: { id: movie.id } }"
    class="interactive-card group flex h-full min-h-52 w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-white/85 shadow-[0_18px_35px_rgba(42,63,103,0.13)]"
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
        <h6 class="line-clamp-2 text-base leading-tight font-bold text-slate-900">
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
import noImg from "@/assets/no-img.jpg";
import type { Movie } from "@/types/movie";
import { computed } from "vue";

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
