<template>
    <nav class="border-b navbar navbar-expand-lg navbar-light bg-light">
        <a
            class="navbar-brand ml-lg-5"
            href="https://github.com/teziovsky/movie-search-engine"
            target="_blank"
            rel="noopener noreferrer"
        >Movies search</a>
        <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggler"
            aria-controls="navbarToggler"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="justify-content-end collapse navbar-collapse" id="navbarToggler">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item">
                    <router-link
                        to="/"
                        class="nav-link"
                        data-toggle="collapse"
                        data-target=".navbar-collapse.show"
                        exact
                    >Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link
                        to="/movies/"
                        class="nav-link"
                        data-toggle="collapse"
                        data-target=".navbar-collapse.show"
                    >Movies</router-link>
                </li>
                <li class="nav-item">
                    <router-link
                        to="/search"
                        class="nav-link"
                        data-toggle="collapse"
                        data-target=".navbar-collapse.show"
                    >Search</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style lang="scss" scoped>
button:focus {
    outline: none;
    border: 1px solid #23caba;
    border-radius: 0.25rem;
}
.nav-link {
    border-bottom: 1px solid transparent;
    transition: border-bottom 0.3s ease;
    &:hover {
        border-bottom: 1px solid #212529;
    }
}
.border-b {
    border-bottom: 1px solid #dadbdd;
}

.router-link-active {
    font-weight: 700;
    border-bottom: 1px solid #212529;
}
</style>
