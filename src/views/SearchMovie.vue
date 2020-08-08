<template>
    <div>
        <div class="jumbotron m-0 p-4 text-center">
            <h1 class="display-4">Search movies</h1>
        </div>
        <form class="d-flex align-center my-2 my-lg-0 mr-lg-5">
            <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                v-model.lazy="message"
            />
            <button
                class="btn btn-outline-success my-sm-0"
                type="submit"
                @click.prevent="search"
            >Search</button>
        </form>
        <MovieTile />
        <Pagination />
    </div>
</template>

<script>
import MovieTile from "../components/MovieTile";
import Pagination from "../components/Pagination";
export default {
    name: "SearchMovie",
    data() {
        return {
            message: "",
        };
    },
    components: {
        MovieTile,
        Pagination,
    },
};
</script>

<style lang="scss" scoped>
</style>