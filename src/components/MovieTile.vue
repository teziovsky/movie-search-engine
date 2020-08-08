<template>
    <router-link :to="'/movie/' + movie.id" class="card">
        <div class="row no-gutters">
            <div class="col-5">
                <img
                    :src="'http://image.tmdb.org/t/p/w500/' + movie.poster_path"
                    class="card-img img-height"
                    alt="test-alt"
                />
            </div>
            <div class="col-7">
                <div
                    class="h-100 card-body d-flex flex-column justify-content-between align-items-center"
                >
                    <h5 class="mt-2 card-title">{{movie.title}}</h5>
                    <div>
                        <p class="card-text">
                            <small>Popularity: {{movie.popularity}}</small>
                        </p>
                        <p class="card-text=">
                            <small>Votes: {{movie.vote_count}}</small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </router-link>
</template>
<script>
export default {
    props: ["movie"],
    name: "MovieTile",
};
</script>
<style lang="scss" scoped>
</style>