<template>
  <router-link
    :to="`/movie-search-engine/movie/${movie.id}`"
    class="group w-[62vw] min-w-47 max-w-54.5 shrink-0 snap-start overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 shadow-[0_10px_18px_rgba(41,63,109,0.12)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(41,63,109,0.18)] sm:w-36.5 sm:min-w-36.5 sm:max-w-36.5 md:w-39 md:min-w-39 md:max-w-39"
  >
    <div class="aspect-2/3 w-full">
      <img
        :alt="`${movie.title} poster picture`"
        :src="posterUrl"
        class="h-full w-full object-cover"
        @error="defaultImg"
      />
    </div>
    <div class="flex min-h-15.5 items-center justify-center px-2 py-2">
      <p
        class="line-clamp-2 text-center text-xs font-semibold leading-tight text-slate-800"
      >
        {{ movie.title }}
      </p>
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
