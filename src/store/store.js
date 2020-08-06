import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { ApiKey } from "../settings";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nowPlaying: [],
    mostPopular: [],
    topRated: []
  },
  mutations: {
    FETCH_NOWPLAYING(state, payload) {
      state.nowPlaying = payload;
    },
    FETCH_MOSTPOPULAR(state, payload) {
      state.mostPopular = payload;
    },
    FETCH_TOPRATED(state, payload) {
      state.topRated = payload;
    }
  },
  actions: {
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
    }
  }
});
