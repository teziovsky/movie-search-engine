import axios from 'axios';
import { ApiKey } from '@/settings';

export default {
  fetchAllMovies({ commit, state }, page) {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&language=en-US&sort_by=${state.sortBy}&include_adult=false&include_video=false&page=${page}`)
      .then((response) => {
        commit('SET_LASTPAGEMOVIES', response.data.total_pages);
        commit('FETCH_ALLMOVIES', response.data.results);
      });
  },
  fetchNextPage({ commit, state }, page) {
    axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&language=en-US&sort_by=${state.sortBy}&include_adult=false&include_video=false&page=${page}`)
      .then((response) => {
        commit('FETCH_NEXTPAGE', response.data.results);
      });
  },
  fetchNowPlaying({ commit }) {
    axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${ApiKey}&language=en-US&page=1`)
      .then((response) => {
        commit(
          'FETCH_NOWPLAYING',
          response.data.results.sort((a, b) => b.popularity - a.popularity)
            .slice(0, 9),
        );
      });
  },
  fetchMostPopular({ commit }) {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=en-US&page=1`)
      .then((response) => {
        commit(
          'FETCH_MOSTPOPULAR',
          response.data.results.sort((a, b) => b.popularity - a.popularity)
            .slice(0, 9),
        );
      });
  },
  fetchTopRated({ commit }) {
    axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${ApiKey}&language=en-US&page=1`)
      .then((response) => {
        commit(
          'FETCH_TOPRATED',
          response.data.results.sort((a, b) => b.vote_average - a.vote_average)
            .slice(0, 9),
        );
      });
  },
  fetchSelectedMovie({ commit }, data) {
    axios.get(`https://api.themoviedb.org/3/movie/${data}?api_key=${ApiKey}&language=en-US`)
      .then((response) => {
        commit('FETCH_SELECTEDMOVIE', response.data);
      });
  },
  fetchSearchResults({ commit }, data) {
    if (data.length === 0) {
      commit('FETCH_SEARCHRESULTS', '');
      commit('SET_LASTPAGESEARCH', null);
    } else {
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&language=en-US&query=${data}&page=1&include_adult=false`)
        .then((response) => {
          commit('SET_LASTPAGESEARCH', response.data.total_pages);
          commit('FETCH_SEARCHRESULTS', response.data.results);
        });
    }
  },
  fetchNextSearchPage({ commit, state }, page) {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&language=en-US&query=${state.searchQuery}&page=${page}&include_adult=false`)
      .then((response) => {
        commit('FETCH_NEXTSEARCHPAGE', response.data.results);
      });
  },
};
