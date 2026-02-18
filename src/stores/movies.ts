import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

import type { Movie, PagedResponse } from "@/types/movie";

const apiKey = import.meta.env.VITE_TMDB_API_KEY;

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export const useMoviesStore = defineStore("movies", () => {
  const allMovies = ref<Movie[]>([]);
  const nowPlaying = ref<Movie[]>([]);
  const mostPopular = ref<Movie[]>([]);
  const topRated = ref<Movie[]>([]);
  const selectedMovie = ref<Movie | null>(null);
  const searchResults = ref<Movie[]>([]);
  const sortBy = ref("popularity.desc");
  const lastPageMovies = ref<number | null>(null);
  const lastPageSearch = ref<number | null>(null);
  const searchQuery = ref("");
  let searchRequestId = 0;

  const ensureApiKey = () => {
    if (!apiKey) {
      throw new Error("Missing VITE_TMDB_API_KEY in .env file");
    }

    return apiKey;
  };

  const fetchAllMovies = async (page = 1) => {
    const key = ensureApiKey();
    const response = await api.get<PagedResponse<Movie>>("/discover/movie", {
      params: {
        api_key: key,
        language: "en-US",
        sort_by: sortBy.value,
        include_adult: false,
        include_video: false,
        page,
      },
    });

    lastPageMovies.value = response.data.total_pages;
    allMovies.value = response.data.results;
  };

  const fetchNextPage = async (page: number) => {
    const key = ensureApiKey();
    const response = await api.get<PagedResponse<Movie>>("/discover/movie", {
      params: {
        api_key: key,
        language: "en-US",
        sort_by: sortBy.value,
        include_adult: false,
        include_video: false,
        page,
      },
    });

    allMovies.value.push(...response.data.results);
  };

  const fetchNowPlaying = async () => {
    const key = ensureApiKey();
    const response = await api.get<PagedResponse<Movie>>("/movie/now_playing", {
      params: {
        api_key: key,
        language: "en-US",
        page: 1,
      },
    });

    nowPlaying.value = response.data.results.toSorted((a, b) => b.popularity - a.popularity).slice(0, 9);
  };

  const fetchMostPopular = async () => {
    const key = ensureApiKey();
    const response = await api.get<PagedResponse<Movie>>("/movie/popular", {
      params: {
        api_key: key,
        language: "en-US",
        page: 1,
      },
    });

    mostPopular.value = response.data.results.toSorted((a, b) => b.popularity - a.popularity).slice(0, 9);
  };

  const fetchTopRated = async () => {
    const key = ensureApiKey();
    const response = await api.get<PagedResponse<Movie>>("/movie/top_rated", {
      params: {
        api_key: key,
        language: "en-US",
        page: 1,
      },
    });

    topRated.value = response.data.results.toSorted((a, b) => b.vote_average - a.vote_average).slice(0, 9);
  };

  const fetchSelectedMovie = async (id: string | number) => {
    const key = ensureApiKey();
    const response = await api.get<Movie>(`/movie/${id}`, {
      params: {
        api_key: key,
        language: "en-US",
      },
    });

    selectedMovie.value = response.data;
  };

  const fetchSearchResults = async (query: string) => {
    const requestId = ++searchRequestId;
    searchQuery.value = query;

    if (!query.trim()) {
      searchResults.value = [];
      lastPageSearch.value = null;
      return;
    }

    const key = ensureApiKey();
    const response = await api.get<PagedResponse<Movie>>("/search/movie", {
      params: {
        api_key: key,
        language: "en-US",
        query,
        page: 1,
        include_adult: false,
      },
    });

    if (requestId !== searchRequestId) {
      return;
    }

    lastPageSearch.value = response.data.total_pages;
    searchResults.value = response.data.results;
  };

  const fetchNextSearchPage = async (page: number) => {
    const key = ensureApiKey();
    const currentRequestId = searchRequestId;
    const response = await api.get<PagedResponse<Movie>>("/search/movie", {
      params: {
        api_key: key,
        language: "en-US",
        query: searchQuery.value,
        page,
        include_adult: false,
      },
    });

    if (currentRequestId !== searchRequestId) {
      return;
    }

    searchResults.value.push(...response.data.results);
  };

  return {
    allMovies,
    nowPlaying,
    mostPopular,
    topRated,
    selectedMovie,
    searchResults,
    sortBy,
    lastPageMovies,
    lastPageSearch,
    searchQuery,
    fetchAllMovies,
    fetchNextPage,
    fetchNowPlaying,
    fetchMostPopular,
    fetchTopRated,
    fetchSelectedMovie,
    fetchSearchResults,
    fetchNextSearchPage,
  };
});
