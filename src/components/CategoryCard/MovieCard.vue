<template>
  <router-link :to="'/movie/' + movie.id" class="card mx-1 my-1" style="width: 110px; height: auto">
    <img
      :alt="movie.title + ' poster picture'"
      :src="'http://image.tmdb.org/t/p/w500/' + movie.poster_path"
      class="card-img-top"
      onerror="this.onerror=null; this.src=`../../assets/no-img.jpg`"
    />
    <div class="card-body d-flex align-items-center justify-content-center py-1 px-1">
      <p class="title small">{{ movie.title }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ['movie'],
  name: 'MovieCard',
};
</script>

<style lang="scss" scoped>
a {
  transition: transform 0.25s ease;
  text-decoration: none;
  color: #212529;

  &:hover {
    transform: scale(1.1);
    border: 1px solid rgba($color: #000000, $alpha: 0.4);

    & .title {
      text-shadow: 0.5px 0px 0px rgba($color: #000000, $alpha: 0.7);
    }
  }
}

.title {
  font-size: 80%;
  font-weight: 400;
  margin: 0;
  text-align: center;
}
</style>
