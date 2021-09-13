<template>
  <nav class="border-b navbar navbar-expand-lg navbar-light bg-light">
    <a
      class="navbar-brand ml-lg-5"
      href="https://github.com/teziovsky/movie-search-engine"
      rel="noopener noreferrer"
      target="_blank"
    >
      Movies search
    </a>
    <button
      aria-controls="navbarToggler"
      aria-expanded="false"
      aria-label="Toggle navigation"
      class="navbar-toggler"
      data-target="#navbarToggler"
      data-toggle="collapse"
      type="button"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div id="navbarToggler" class="justify-content-end collapse navbar-collapse">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item">
          <router-link
            class="nav-link"
            data-target=".navbar-collapse.show"
            data-toggle="collapse"
            exact
            to="/"
          >
            Home
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            data-target=".navbar-collapse.show"
            data-toggle="collapse"
            to="/movies/"
          >
            Movies
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            data-target=".navbar-collapse.show"
            data-toggle="collapse"
            to="/search"
          >
            Search
          </router-link>
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
  border: 1px solid #23CABA;
  border-radius: 0.25rem;
  outline: none;
}

.nav-link {
  transition: border-bottom 0.3s ease;
  border-bottom: 1px solid transparent;

  &:hover {
    border-bottom: 1px solid #212529;
  }
}

.border-b {
  border-bottom: 1px solid #DADBDD;
}

.router-link-active {
  font-weight: 700;
  border-bottom: 1px solid #212529;
}
</style>
