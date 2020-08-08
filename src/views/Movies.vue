<template>
    <div class="min-height">
        <div class="jumbotron m-0 p-4 text-center">
            <h1 class="display-4">List of movies</h1>
        </div>
        <div class="select my-3">
            <label for="select">Sort by:</label>
            <select id="select" class="custom-select" v-model="sortBy">
                <option value="popularity.desc" selected>Popularity ↓</option>
                <option value="popularity.asc">Popularity ↑</option>
                <option value="original_title.desc">Original title ↓</option>
                <option value="original_title.asc">Original title ↑</option>
            </select>
        </div>
        <div class="min-height-content d-flex flex-wrap justify-content-center">
            <MovieTile v-for="movie in showMovies" :movie="movie" :key="movie.id" />
        </div>
        <Pagination :page="page" :lastPage="lastPage" :prevPage="prevPage" :nextPage="nextPage" />
    </div>
</template>

<script>
import { mapState } from "vuex";
import MovieTile from "../components/MovieTile";
import Pagination from "../components/Pagination";
export default {
    name: "Movies",
    data() {
        return {
            page: 1,
            perPage: 20,
        };
    },
    computed: {
        ...mapState(["allMovies"]),
        showMovies() {
            let start = (this.page - 1) * this.perPage;
            let end = start + this.perPage;
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
                this.$store.commit("SET_SORTBY", value);
            },
        },
    },
    methods: {
        prevPage() {
            this.page--;
            window.scrollTo({ top: 0, behavior: "smooth" });
        },
        nextPage() {
            window.scrollTo({ top: 0, behavior: "smooth" });
            this.page++;
            this.$store.dispatch("fetchNextPage", this.page, this.sortBy);
        },
    },
    created() {
        this.$store.dispatch("fetchAllMovies", this.page, this.sortBy);
    },
    watch: {
        sortBy() {
            this.$store.dispatch("fetchAllMovies", this.page, this.sortBy);
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
    flex: column;
    align-items: baseline;
    justify-content: center;
}

.custom-select {
    width: 200px;
    margin-left: 5px;
}
</style>