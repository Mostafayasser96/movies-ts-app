export interface CarouselData{
  json: any;
  dates: Dates;
  page: number;
  results: Array<Movie>
}
interface Dates{
    maximum: string;
    minimum: string;
}
export interface Movie{
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  total_pages: number;
  total_results: number;
}
export interface CardProps {
  movie: CarouselData;
  serie: Seasons;
  
}
// this is the type for latest-tv, requested apis'
export interface Latest{
  adult: boolean;
  backdrop_path: string;
  created_by: Array<string>;
  episode_run_time: Array<null>;
  first_air_date: string;
  genres: Array<Genres>;
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: LastEpisode;
  networks: null[];
  next_episode_to_air: null;
  number_of_episodes: number;
  number_of_seasons: number;
  origin_coutry: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: null[];
  production_countries: Array<ProductionCountries>;
  seasons: Array<Seasons>;
  spoken_languages: Array<SpokenLanguages>;
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;

}
interface Genres{
  id: number;
  name: string;
}
interface LastEpisode{
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  season_number: number;
  still_path: null;
  vote_average: number;
  vote_count: number;
}
interface ProductionCountries{
  iso_3166_1: string;
  name: string;
}
export interface Seasons{
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: null;
  season_number: number;
}
interface SpokenLanguages{
  english_name: string;
  iso_639_1: string;
  name: string;
}