<template>
  <div class="min-height container d-flex justify-content-center">
    <div class="card mt-4">
      <div class="row no-gutters">
        <div class="col-4 my-auto">
          <img
            :src="'http://image.tmdb.org/t/p/w500/' + movie.poster_path"
            class="card-img img-width"
            alt="test-alt"
          />
        </div>
        <div class="col-8">
          <div class="h-100 card-body d-flex flex-column justify-content-start">
            <h3 class="mb-3 card-title">{{ movie.title }}</h3>
            <div>
              <p class="card-text m-0">
                <strong>Genre:</strong>
                {{ movie.genres.map((item) => item.name).join(', ') }}
              </p>
              <p class="card-text m-0">
                <strong>Prod. countries:</strong>
                {{ movie.production_countries.map((item) => item.name).join(', ') }}
              </p>
              <p class="card-text m-0">
                <strong>Popularity:</strong>
                {{ movie.popularity }}
              </p>
              <p class="card-text m-0">
                <strong>Votes:</strong>
                {{ movie.vote_count }}
              </p>
              <p class="card-text m-0">
                <strong>Vote Average:</strong>
                {{ movie.vote_average }}
              </p>
              <p class="card-text mt-2">
                <a
                  :href="'https://www.themoviedb.org/movie/' + movie.id"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>IMDB Link</strong>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row no-gutters">
        <div class="col-12"></div>
        <p class="card-text text-justify p-3">
          <strong>Description:</strong>
          {{ movie.overview }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieDetails',
  computed: {
    movie() {
      return this.$store.getters.selectedMovie;
    },
  },
  created() {
    this.$store.dispatch('fetchSelectedMovie', this.$route.params.id);
  },
};
</script>

<style lang="scss" scoped>
.min-height {
  min-height: calc(100vh - 132px);
}

a {
  color: #6c757d;
  border-bottom: 1px solid transparent;
  transition: border-bottom 0.3s ease;

  &:hover {
    text-decoration: none;
    border-bottom: 1px solid #6c757d;
  }
}

.img-width {
  max-width: 250px;
}

.card {
  width: 60%;
  height: 100%;
  display: block;
}

@media only screen and (max-width: 768px) {
  .img-width {
    width: inherit;
  }
  .card {
    width: 100vw;
  }
}
</style>
