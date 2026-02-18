<template>
  <section class="page-shell">
    <div class="page-heading">
      <h1 class="text-4xl font-bold tracking-tight">Search movies</h1>
    </div>

    <form class="mx-auto my-4 flex max-w-xl items-center justify-center gap-2" @submit.prevent="search">
      <input v-model.lazy="message" aria-label="Search movies" class="field" placeholder="Search" type="search" />
      <button class="action-btn px-4 py-2 text-sm" type="submit">Search</button>
    </form>

    <div class="flex min-h-80 flex-wrap justify-center">
      <MovieTile v-for="movie in showMovies" :key="movie.id" :movie="movie" />
    </div>

    <Pagination :last-page="lastPageSearch" :page="page" @next="nextPage" @prev="prevPage" />
  </section>
</template>

<script setup lang="ts">
import MovieTile from "@/components/MovieTile.vue";
import Pagination from "@/components/Pagination.vue";
import { useMoviesStore } from "@/stores/movies";
import { storeToRefs } from "pinia";
import { computed, ref } from "vue";

const store = useMoviesStore();
const { searchResults, searchQuery, lastPageSearch } = storeToRefs(store);

const page = ref(1);
const perPage = 21;

const showMovies = computed(() => {
  const start = (page.value - 1) * perPage;
  const end = start + perPage;
  return searchResults.value.slice(start, end);
});

const message = computed({
  get: () => searchQuery.value,
  set: (value: string) => {
    searchQuery.value = value;
  },
});

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const search = async () => {
  await store.fetchSearchResults(message.value);
  page.value = 1;
};

const prevPage = () => {
  if (page.value <= 1) {
    return;
  }

  page.value -= 1;
  scrollToTop();
};

const nextPage = async () => {
  if (lastPageSearch.value === null || page.value >= lastPageSearch.value) {
    return;
  }

  page.value += 1;
  scrollToTop();
  await store.fetchNextSearchPage(page.value);
};
</script>
