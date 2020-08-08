<template>
    <div>
        <div class="jumbotron m-0 p-4 text-center">
            <h1 class="display-4">Movies search!</h1>
            <p
                class="lead"
            >This is a simple website to search movies from The movies DB API. Created for the needs of recruitment to Junior Frontend Developer.</p>
        </div>
        <CategoryCard
            v-for="title in titles"
            :key="title"
            :title="title"
            :category="title=='Now Playing' ? nowPlaying : title=='Most Popular' ? mostPopular : title=='Top Rated' ? topRated : null"
        />
    </div>
</template>

<script>
import { mapState } from "vuex";
import CategoryCard from "../components/CategoryCard/CategoryCard";

export default {
    name: "Home",
    data() {
        return {
            titles: ["Now Playing", "Most Popular", "Top Rated"],
        };
    },
    computed: {
        ...mapState(["nowPlaying", "mostPopular", "topRated"]),
    },
    mounted() {
        this.$store.dispatch("fetchNowPlaying");
        this.$store.dispatch("fetchMostPopular");
        this.$store.dispatch("fetchTopRated");
    },
    components: {
        CategoryCard,
    },
};
</script>

<style lang="scss" scoped>
</style>