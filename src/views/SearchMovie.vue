<template>
  <div class="min-height">
    <div class="jumbotron m-0 p-4 text-center">
      <h1 class="display-4">Search movies</h1>
    </div>
    <form class="d-flex align-center justify-content-center my-3 mr-lg-5">
      <input
        class="form-control mr-1 search-input"
        type="search"
        placeholder="Search"
        aria-label="Search"
        v-model.lazy="message"
      />
      <button class="btn btn-outline-danger my-sm-0" type="submit" @click.prevent="search">
        Search
      </button>
    </form>
    <div class="min-height-content d-flex flex-wrap justify-content-center">
      <MovieTile v-for="movie in showMovies" :movie="movie" :key="movie.id" />
    </div>
    <Pagination :page="page" :lastPage="lastPage" :prevPage="prevPage" :nextPage="nextPage" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import MovieTile from '../components/MovieTile.vue';
import Pagination from '../components/Pagination.vue';

export default {
  name: 'SearchMovie',
  data() {
    return {
      page: 1,
      perPage: 20,
    };
  },
  computed: {
    ...mapState(['searchResults']),
    showMovies() {
      const start = (this.page - 1) * this.perPage;
      const end = start + this.perPage;
      return this.searchResults.slice(start, end);
    },
    message: {
      get() {
        return this.$store.state.searchQuery;
      },
      set(value) {
        this.$store.commit('FETCH_SEARCHQUERY', value);
      },
    },
    lastPage() {
      return this.$store.state.lastPageSearch;
    },
  },
  methods: {
    search() {
      this.$store.dispatch('fetchSearchResults', this.message);
      this.page = 1;
    },
    prevPage() {
      this.page -= 1;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    nextPage() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      this.page += 1;
      this.$store.dispatch('fetchNextSearchPage', this.page);
    },
  },
  components: {
    MovieTile,
    Pagination,
  },
};
</script>

<style lang="scss" scoped>
button {
  filter: invert(100%);
}
.min-height {
  min-height: calc(100vh - 132px);

  &-content {
    min-height: calc(100vh - 387px);
  }
}
.search-input {
  width: 200px;
}
</style>
