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
                    <router-link to="/movies/" class="nav-link">List Of Movies</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/search" class="nav-link">Search</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navbar",
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