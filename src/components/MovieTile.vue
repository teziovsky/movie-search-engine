<template>
  <router-link :to="'/movie/' + movie.id" class="card">
    <div class="row no-gutters">
      <div class="col">
        <img
          :src="'http://image.tmdb.org/t/p/w500/' + movie.poster_path"
          @error="defaultImg"
          class="card-img img-height"
          :alt="movie.title + ' poster picture'"
        />
      </div>
      <div class="col">
        <div
          class="h-100 card-body d-flex flex-column justify-content-between align-items-center p-3"
        >
          <h6 class="mt-1 card-title">{{ movie.title }}</h6>
          <div>
            <p class="card-text m-0">
              <small>Popularity: {{ movie.popularity }}</small>
            </p>
            <p class="card-text m-0">
              <small>Votes: {{ movie.vote_count }}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>
<script>
export default {
  props: ['movie'],
  name: 'MovieTile',
  data() {
    return {
      defaultImage: require('@/assets/no-img.jpg'),
    };
  },
  methods: {
    defaultImg(e) {
      e.target.src = this.defaultImage;
    },
  },
};
</script>
<style lang="scss" scoped>
a {
  color: #212529;
  text-decoration: none;
  transition: transform 0.25s ease;

  &:hover {
    border: 1px solid rgba($color: #000000, $alpha: 0.4);
    transform: scale(1.1);
    & .title {
      text-shadow: 0.5px 0px 0px rgba($color: #000000, $alpha: 0.7);
    }
  }
}
.card {
  width: 300px;
  margin: 10px;
}
.img-height {
  height: 100%;
  object-fit: cover;
  object-position: center;
  width: inherit;
}

@media only screen and (max-width: 768px) {
  .card {
    width: 85vw;
  }
}
</style>
