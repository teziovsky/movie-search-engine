<template>
    <div class="card d-flex justify-content-center my-3">
        <h5 class="card-header">{{ title }}</h5>
        <div class="card-body d-flex flex-wrap justify-content-around">
            <MovieCard v-for="movie in this.$attrs.category" :movie="movie" :key="movie.id" />
        </div>
    </div>
</template>

<script>
import MovieCard from './MovieCard';

export default {
  props: {
    title: {
      type: String,
    },
  },
  name: 'CategoryCard',
  components: {
    MovieCard,
  },
};
</script>

<style lang="scss" scoped>
</style>
