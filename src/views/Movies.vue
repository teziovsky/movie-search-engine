<template>
  <div class="min-height">
    <div class="jumbotron m-0 p-4 text-center">
      <h1 class="display-4">List of movies</h1>
    </div>
    <div class="select my-3">
      <label for="select">Sort by:</label>
      <select id="select" v-model="sortBy" class="custom-select">
        <option selected value="popularity.desc">Popularity ↓</option>
        <option value="popularity.asc">Popularity ↑</option>
        <option value="original_title.desc">Original title ↓</option>
        <option value="original_title.asc">Original title ↑</option>
        <option value="release_date.desc">Release date ↓</option>
        <option value="release_date.asc">Release date ↑</option>
        <option value="vote_count.desc">Vote count ↓</option>
        <option value="vote_count.asc">Vote count ↑</option>
      </select>
    </div>
    <div class="min-height-content d-flex flex-wrap justify-content-center">
      <MovieTile v-for="movie in showMovies" :key="movie.id" :movie="movie" />
    </div>
    <Pagination :lastPage="lastPage" :nextPage="nextPage" :page="page" :prevPage="prevPage" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import MovieTile from '../components/MovieTile.vue';
import Pagination from '../components/Pagination.vue';

export default {
  name: 'Movies',
  data() {
    return {
      page: 1,
      perPage: 20,
    };
  },
  computed: {
    ...mapState(['allMovies']),
    showMovies() {
      const start = (this.page - 1) * this.perPage;
      const end = start + this.perPage;
      return this.allMovies.slice(start, end);
    },
    lastPage() {
      return this.$store.state.lastPageMovies;
    },
    sortBy: {
      get() {
        return this.$store.state.sortBy;
      },
      set(value) {
        this.$store.commit('SET_SORTBY', value);
      },
    },
  },
  methods: {
    prevPage() {
      this.page -= 1;
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
    nextPage() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      this.page += 1;
      this.$store.dispatch('fetchNextPage', this.page, this.sortBy);
    },
  },
  created() {
    this.$store.dispatch('fetchAllMovies', this.page, this.sortBy);
  },
  watch: {
    sortBy() {
      this.$store.dispatch('fetchAllMovies', this.page, this.sortBy);
      this.page = 1;
    },
  },
  components: {
    MovieTile,
    Pagination,
  },
};
</script>

<style lang="scss" scoped>
.min-height {
  min-height: calc(100vh - 132px);

  &-content {
    min-height: calc(100vh - 387px);
  }
}

.select {
  display: flex;
  align-items: baseline;
  justify-content: center;
}

.custom-select {
  width: 200px;
  margin-left: 5px;
}
</style>
