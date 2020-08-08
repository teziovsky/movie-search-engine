import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { ApiKey } from "../settings";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allMovies: [],
    nowPlaying: [],
    mostPopular: [],
    topRated: [],
    selectedMovie: [],
    searchResults: [],
    sortBy: "popularity.desc",
    lastPageNr: null
  },
  getters: {
    selectedMovie(state) {
      return state.selectedMovie;
    }
  },
  mutations: {
    FETCH_ALLMOVIES(state, payload) {
      state.allMovies = payload;
    },
    FETCH_NEXTPAGE(state, payload) {
      state.allMovies.push(...payload);
    },
    SET_LASTPAGENR(state, payload) {
      state.lastPageNr = payload;
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
    FETCH_SEARCHQUERY(state, payload) {
      state.searchQuery = payload;
    }
  },
  actions: {
    fetchAllMovies({ commit, state }, page) {
      axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&language=en-US&sort_by=${state.sortBy}&include_adult=false&include_video=false&page=${page}`
        )
        .then(response => {
          commit("SET_LASTPAGENR", response.data.total_pages);
          commit("FETCH_ALLMOVIES", response.data.results);
        });
    },
    fetchNextPage({ commit, state }, page) {
      axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&language=en-US&sort_by=${state.sortBy}&include_adult=false&include_video=false&page=${page}`
        )
        .then(response => {
          commit("FETCH_NEXTPAGE", response.data.results);
        });
    },
    fetchNowPlaying({ commit }) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${ApiKey}&language=en-US&page=1`
        )
        .then(response => {
          commit(
            "FETCH_NOWPLAYING",
            response.data.results.sort((a, b) => b.popularity - a.popularity).slice(0, 9)
          );
        });
    },
    fetchMostPopular({ commit }) {
      axios
        .get(`https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=en-US&page=1`)
        .then(response => {
          commit(
            "FETCH_MOSTPOPULAR",
            response.data.results.sort((a, b) => b.popularity - a.popularity).slice(0, 9)
          );
        });
    },
    fetchTopRated({ commit }) {
      axios
        .get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${ApiKey}&language=en-US&page=1`)
        .then(response => {
          commit(
            "FETCH_TOPRATED",
            response.data.results.sort((a, b) => b.vote_average - a.vote_average).slice(0, 9)
          );
        });
    },
    fetchSelectedMovie({ commit }, data) {
      axios
        .get(`https://api.themoviedb.org/3/movie/${data}?api_key=${ApiKey}&language=en-US`)
        .then(response => {
          commit("FETCH_SELECTEDMOVIE", response.data);
        });
    },
    fetchSearchResults({ commit }, data) {
      if (data.length == 0) {
        commit("FETCH_SEARCHRESULTS", "");
      } else {
        axios
          .get(
            `https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&language=en-US&query=${data}&page=1&include_adult=true`
          )
          .then(response => {
            commit("FETCH_SEARCHRESULTS", response.data);
            console.log(response.data.results);
          });
      }
    }
  }
});
