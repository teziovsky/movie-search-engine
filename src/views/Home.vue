<template>
  <section class="page-shell">
    <div class="page-heading mb-6">
      <span class="chip">Cinematic Explorer</span>
      <h1 class="page-title mt-3">A glossy way to discover what to watch next</h1>
      <p class="page-subtitle">
        Fresh releases, audience favorites, and critically acclaimed picks pulled from TMDB in one
        polished browsing experience.
      </p>
    </div>

    <div class="space-y-5 pb-8">
      <CategoryCard
        v-for="item in categories"
        :key="item.title"
        :category="item.movies"
        :title="item.title"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { computed, onMounted } from 'vue';
import CategoryCard from '@/components/CategoryCard/CategoryCard.vue';
import { useMoviesStore } from '@/stores/movies';

const store = useMoviesStore();
const { nowPlaying, mostPopular, topRated } = storeToRefs(store);

const categories = computed(() => [
  { title: 'Now Playing', movies: nowPlaying.value },
  { title: 'Most Popular', movies: mostPopular.value },
  { title: 'Top Rated', movies: topRated.value },
]);

onMounted(async () => {
  await Promise.all([store.fetchNowPlaying(), store.fetchMostPopular(), store.fetchTopRated()]);
});
</script>
