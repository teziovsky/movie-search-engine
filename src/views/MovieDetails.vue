<template>
    <div class="container d-flex align-items-center flex-column">
        <h3 class="mt-5 mb-3 card-title">{{movie.title}}</h3>
        <div class="card">
            <div class="row no-gutters">
                <div class="col-4">
                    <img
                        :src="'http://image.tmdb.org/t/p/w500/'+ movie.poster_path"
                        class="card-img img-width"
                        alt="test-alt"
                    />
                </div>
                <div class="col-8">
                    <div class="h-100 card-body d-flex flex-column justify-content-between">
                        <div>
                            <p class="card-text m-0">
                                <small
                                    class="text-muted"
                                >Genre: {{ movie.genres.map(item => item.name).join(', ') }}</small>
                            </p>
                            <p class="card-text">
                                <small
                                    class="text-muted"
                                >Production countries: {{ movie.production_countries.map(item => item.name).join(', ')}}</small>
                            </p>
                            <p class="card-text">Description: {{movie.overview}}</p>
                        </div>
                        <div class="d-flex justify-content-between">
                            <p class="card-text">
                                <small
                                    class="text-muted"
                                >Popularity: {{movie.popularity}} | Votes: {{movie.vote_count}} | Vote Average: {{movie.vote_average}}</small>
                            </p>

                            <p class="card-text">
                                <small class="text-muted">
                                    <a
                                        :href="'https://www.themoviedb.org/movie/' + movie.id"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style="width: 100px; height: auto"
                                    >IMDBLink</a>
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MovieDetails",
    computed: {
        movie() {
            return this.$store.getters.selectedMovie;
        },
    },
    created() {
        this.$store.dispatch("fetchSelectedMovie", this.$route.params.id);
    },
};
</script>

<style lang="scss" scoped>
a {
    color: #6c757d;

    &:hover {
        text-decoration: none;
        text-shadow: 0.5px 0px 0px rgba($color: #000000, $alpha: 0.5);
    }
}

.img-width {
    max-width: 300px;
}
</style>