<template>
  <section class="page-shell">
    <div class="page-heading">
      <span class="chip">Explore</span>
      <h1 class="page-title mt-3">Movie catalog</h1>
      <p class="page-subtitle">
        Search instantly with debounce or browse by TMDB sorting.
      </p>
    </div>

    <div class="glass-panel mt-5 p-4 md:p-5">
      <div class="grid gap-3 md:grid-cols-[1fr_auto]">
        <label class="block">
          <span
            class="mb-2 block text-xs font-bold uppercase tracking-[0.08em] text-slate-600"
            >Search movies</span
          >
          <input
            v-model="searchInput"
            aria-label="Search movies"
            class="field"
            placeholder="Type a movie title..."
            type="search"
          />
        </label>

        <label class="block md:min-w-[250px]">
          <span
            class="mb-2 block text-xs font-bold uppercase tracking-[0.08em] text-slate-600"
            >Sort discover mode</span
          >
          <select
            id="sort-select"
            v-model="sortByModel"
            :disabled="isSearchMode"
            class="field disabled:opacity-60"
          >
            <option value="popularity.desc">Popularity ↓</option>
            <option value="popularity.asc">Popularity ↑</option>
            <option value="original_title.desc">Original title ↓</option>
            <option value="original_title.asc">Original title ↑</option>
            <option value="release_date.desc">Release date ↓</option>
            <option value="release_date.asc">Release date ↑</option>
            <option value="vote_count.desc">Vote count ↓</option>
            <option value="vote_count.asc">Vote count ↑</option>
          </select>
        </label>
      </div>

      <p class="mt-3 text-xs font-medium text-slate-600">
        <span v-if="isSearchMode"
          >Showing search results for "{{ debouncedQuery }}".</span
        >
        <span v-else
          >Browsing discover list. Sorting applies to this mode.</span
        >
      </p>
    </div>

    <div
      v-if="showMovies.length"
      class="movies-grid mt-5 grid min-h-80 grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3"
    >
      <MovieTile
        v-for="movie in showMovies"
        :key="movie.id"
        :movie="movie"
        class="movie-grid-item"
      />
    </div>

    <div
      v-else
      class="surface-tint mt-6 rounded-2xl p-6 text-center text-sm font-medium text-slate-700"
    >
      No movies found. Try another search phrase.
    </div>

    <Pagination
      v-if="showMovies.length"
      :last-page="activeLastPage"
      :page="page"
      @next="nextPage"
      @prev="prevPage"
    />
  </section>
</template>

<script setup lang="ts">
import MovieTile from "@/components/MovieTile.vue";
import Pagination from "@/components/Pagination.vue";
import { useMoviesStore } from "@/stores/movies";
import { storeToRefs } from "pinia";
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";

const store = useMoviesStore();
const {
  allMovies,
  sortBy,
  lastPageMovies,
  searchResults,
  searchQuery,
  lastPageSearch,
} = storeToRefs(store);

const page = ref(1);
const perPage = 21;
const apiPageSize = 20;
const searchInput = ref(searchQuery.value);
const debouncedQuery = ref(searchQuery.value.trim());
const debounceMs = 350;
let debounceHandle: ReturnType<typeof setTimeout> | null = null;

const isSearchMode = computed(() => debouncedQuery.value.length > 0);

const activeMovies = computed(() =>
  isSearchMode.value ? searchResults.value : allMovies.value,
);

const toLocalPageCount = (apiPages: number | null) => {
  if (apiPages === null) {
    return null;
  }

  return Math.ceil((apiPages * apiPageSize) / perPage);
};

const activeLastPage = computed(() =>
  toLocalPageCount(isSearchMode.value ? lastPageSearch.value : lastPageMovies.value),
);

const showMovies = computed(() => {
  const start = (page.value - 1) * perPage;
  const end = start + perPage;
  return activeMovies.value.slice(start, end);
});

const sortByModel = computed({
  get: () => sortBy.value,
  set: (value: string) => {
    sortBy.value = value;
  },
});

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const ensureDiscoverItemsLoaded = async (targetCount: number) => {
  while (allMovies.value.length < targetCount) {
    const maxApiPages = lastPageMovies.value;
    if (maxApiPages !== null && Math.ceil(allMovies.value.length / apiPageSize) >= maxApiPages) {
      break;
    }

    const nextApiPage = Math.floor(allMovies.value.length / apiPageSize) + 1;
    const previousLength = allMovies.value.length;
    await store.fetchNextPage(nextApiPage);
    if (allMovies.value.length === previousLength) {
      break;
    }
  }
};

const ensureSearchItemsLoaded = async (targetCount: number) => {
  while (searchResults.value.length < targetCount) {
    const maxApiPages = lastPageSearch.value;
    if (maxApiPages === null || Math.ceil(searchResults.value.length / apiPageSize) >= maxApiPages) {
      break;
    }

    const nextApiPage = Math.floor(searchResults.value.length / apiPageSize) + 1;
    const previousLength = searchResults.value.length;
    await store.fetchNextSearchPage(nextApiPage);
    if (searchResults.value.length === previousLength) {
      break;
    }
  }
};

const ensureItemsLoaded = async (targetCount: number) => {
  if (isSearchMode.value) {
    await ensureSearchItemsLoaded(targetCount);
    return;
  }

  await ensureDiscoverItemsLoaded(targetCount);
};

watch(searchInput, (value) => {
  if (debounceHandle) {
    clearTimeout(debounceHandle);
  }

  debounceHandle = setTimeout(async () => {
    const trimmedValue = value.trim();
    debouncedQuery.value = trimmedValue;
    page.value = 1;

    if (!trimmedValue) {
      await store.fetchSearchResults("");
      if (allMovies.value.length === 0) {
        await store.fetchAllMovies(page.value);
      }
      await ensureDiscoverItemsLoaded(perPage);
      return;
    }

    await store.fetchSearchResults(trimmedValue);
    await ensureSearchItemsLoaded(perPage);
  }, debounceMs);
});

watch(sortByModel, async () => {
  if (isSearchMode.value) {
    return;
  }

  page.value = 1;
  await store.fetchAllMovies(page.value);
  await ensureDiscoverItemsLoaded(perPage);
});

const prevPage = () => {
  if (page.value <= 1) {
    return;
  }

  page.value -= 1;
  scrollToTop();
};

const nextPage = async () => {
  if (activeLastPage.value === null || page.value >= activeLastPage.value) {
    return;
  }

  page.value += 1;
  scrollToTop();
  await ensureItemsLoaded(page.value * perPage);
};

onMounted(async () => {
  if (!allMovies.value.length) {
    await store.fetchAllMovies(page.value);
  }

  if (searchQuery.value.trim()) {
    await store.fetchSearchResults(searchQuery.value.trim());
  }

  await ensureItemsLoaded(perPage);
});

onBeforeUnmount(() => {
  if (debounceHandle) {
    clearTimeout(debounceHandle);
  }
});
</script>

<style scoped>
.movies-grid {
  container-type: inline-size;
  container-name: movies-grid;
}

@container movies-grid (min-width: 0px) {
  .movies-grid > .movie-grid-item:nth-child(-n + 2) {
    border-color: rgba(67, 117, 234, 0.5);
    box-shadow:
      0 0 0 1px rgba(80, 129, 244, 0.35),
      0 22px 34px rgba(35, 61, 116, 0.22);
    position: relative;
  }

  .movies-grid > .movie-grid-item:nth-child(-n + 2)::after {
    content: "Featured";
    position: absolute;
    top: 0.65rem;
    left: 0.65rem;
    z-index: 2;
    border: 1px solid rgba(88, 124, 200, 0.38);
    border-radius: 9999px;
    background: rgba(255, 255, 255, 0.88);
    color: #22408f;
    font-size: 0.62rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    line-height: 1;
    padding: 0.3rem 0.5rem;
    text-transform: uppercase;
  }
}

@container movies-grid (min-width: 860px) {
  .movies-grid > .movie-grid-item:nth-child(-n + 2) {
    box-shadow:
      0 0 0 1px rgba(80, 129, 244, 0.42),
      0 28px 42px rgba(35, 61, 116, 0.26);
    transform: translateY(-2px);
  }
}

:global(html.theme-dark) .movies-grid > .movie-grid-item:nth-child(-n + 2) {
  border-color: rgba(132, 168, 255, 0.62);
  box-shadow:
    0 0 0 1px rgba(132, 168, 255, 0.45),
    0 24px 42px rgba(0, 0, 0, 0.42);
}

:global(html.theme-dark)
  .movies-grid
  > .movie-grid-item:nth-child(-n + 2)::after {
  border-color: rgba(132, 168, 255, 0.5);
  background: rgba(24, 36, 65, 0.9);
  color: #c8d8ff;
}
</style>
