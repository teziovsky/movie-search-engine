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
    searchQuery: ""
  },
  getters: {
    findMovieID(state) {
      return data => {
        let selected = state.selectedMovie.id === data;
        let playing = state.nowPlaying.filter(movie => movie.id === data);
        let popular = state.mostPopular.filter(movie => movie.id === data);
        let rated = state.topRated.filter(movie => movie.id === data);
        if (selected.length != 0) return state.selectedMovie;
        else if (playing.length != 0) return playing[0];
        else if (popular.length != 0) return popular[0];
        else if (rated.length != 0) return rated[0];
      };
    }
  },
  mutations: {
    FETCH_ALLMOVIES(state, payload) {
      state.allMovies = payload;
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
    fetchAllMovies({ commit }) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${ApiKey}&language=en-US&page=1`
        )
        .then(response => {
          commit("FETCH_NOWPLAYING", response.data.results);
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
            response.data.results.sort((a, b) => b.popularity - a.popularity).slice(0, 10)
          );
        });
    },
    fetchMostPopular({ commit }) {
      axios
        .get(`https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=en-US&page=1`)
        .then(response => {
          commit(
            "FETCH_MOSTPOPULAR",
            response.data.results.sort((a, b) => b.popularity - a.popularity).slice(0, 10)
          );
        });
    },
    fetchTopRated({ commit }) {
      axios
        .get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${ApiKey}&language=en-US&page=1`)
        .then(response => {
          commit(
            "FETCH_TOPRATED",
            response.data.results.sort((a, b) => b.vote_average - a.vote_average).slice(0, 10)
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
            //   console.log(response);
          });
      }
    }
  }
});
