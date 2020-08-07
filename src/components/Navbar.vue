<template>
    <nav class="border-b navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand ml-lg-5" href="#">Movies search</a>
        <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="justify-content-end collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item">
                    <router-link to="/" class="nav-link" exact>Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/movies" class="nav-link">Movies</router-link>
                </li>
            </ul>
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
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navbar",
    data() {
        return {
            // message: "",
        };
    },
    computed: {
        message: {
            get() {
                return this.$store.state.searchQuery;
            },
            set(value) {
                this.$store.commit("FETCH_SEARCHQUERY", value);
                this.$store.dispatch("fetchSearchResults", value);
            },
        },
    },
    methods: {
        search(e) {
            this.$store.dispatch("fetchSearchResults", e.target.form[0].value);
            console.log(e.target.form[0].value);
        },
    },
};
</script>

<style lang="scss" scoped>
.border-b {
    border-bottom: 1px solid #dadbdd;
}

.router-link-active {
    font-weight: 700;
}
</style>