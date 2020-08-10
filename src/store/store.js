import Vue from 'vue';
import Vuex from 'vuex';

import getters from './getters';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allMovies: [],
    nowPlaying: [],
    mostPopular: [],
    topRated: [],
    selectedMovie: [],
    searchResults: [],
    sortBy: 'popularity.desc',
    lastPageMovies: null,
    lastPageSearch: null,
    searchQuery: '',
  },
  getters,
  mutations,
  actions,
});
