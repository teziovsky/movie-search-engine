<template>
    <div class="card my-3">
        <h5 class="card-header">{{ title }}</h5>
        <div class="card-body d-flex flex-wrap justify-content-center">
            <MovieCard />
        </div>
    </div>
</template>

<script>
import MovieCard from "./MovieCard";
export default {
    props: ["title"],
    name: "CategoryCard",
    components: {
        MovieCard,
    },
};
</script>

<style lang="scss" scoped>
</style>