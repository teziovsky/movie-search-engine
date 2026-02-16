export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  popularity: number;
  vote_count: number;
  vote_average: number;
  release_date?: string;
  genres?: Genre[];
  production_countries?: ProductionCountry[];
}

export interface PagedResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}
