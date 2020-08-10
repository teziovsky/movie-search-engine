export default {
  FETCH_ALLMOVIES(state, payload) {
    state.allMovies = payload;
  },
  FETCH_NEXTPAGE(state, payload) {
    state.allMovies.push(...payload);
  },
  SET_LASTPAGEMOVIES(state, payload) {
    state.lastPageMovies = payload;
  },
  SET_LASTPAGESEARCH(state, payload) {
    state.lastPageSearch = payload;
  },
  SET_SORTBY(state, payload) {
    state.sortBy = payload;
  },
  FETCH_NOWPLAYING(state, payload) {
    state.nowPlaying = payload;
  },
  FETCH_MOSTPOPULAR(state, payload) {
    state.mostPopular = payload;
  },
  FETCH_TOPRATED(state, payload) {
    state.topRated = payload;
  },
  FETCH_SELECTEDMOVIE(state, payload) {
    state.selectedMovie = payload;
  },
  FETCH_SEARCHRESULTS(state, payload) {
    state.searchResults = payload;
  },
  FETCH_NEXTSEARCHPAGE(state, payload) {
    state.searchResults.push(...payload);
  },
  FETCH_SEARCHQUERY(state, payload) {
    state.searchQuery = payload;
  },
};
