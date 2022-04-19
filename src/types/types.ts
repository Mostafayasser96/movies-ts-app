import React from "react";
import { StringLiteralLike } from "typescript";

export interface CarouselData{
  json: any;
  dates: Dates;
  page: number;
  results: Array<Card>
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
  movie: Array<Movie>;
  serie: Season[];
  
}
// this is the type for latest-tv, requested apis'
export interface Latest{
  adult: boolean;
  backdrop_path: string;
  created_by: Array<string>;
  episode_run_time: string[];
  first_air_date: string;
  genres: Array<Genres>;
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: LastEpisode;
  networks: [];
  next_episode_to_air: '';
  number_of_episodes: number;
  number_of_seasons: number;
  origin_coutry: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: [];
  production_countries: Array<ProductionCountries>;
  seasons: Array<Season>;
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
  still_path: string;
  vote_average: number;
  vote_count: number;
}
interface ProductionCountries{
  iso_3166_1: string;
  name: string;
}
export interface Season{
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
}
interface SpokenLanguages{
  english_name: string;
  iso_639_1: string;
  name: string;
  original_language: string;
}



// this is type Card(contains values from both kinds movies and series)
// export interface Card{
//   movie: Array<{
//   id: number;
//   poster_path: string;
//   title: string;
//   vote_average: number;
//   genre_ids: number[];
//   }>;
//   serie: Array<{
//   overview: string;
//   air_date: string;
//   episode_count: number;
//   id: number;
//   name: string;
//   poster_path: string;
//   season_number: number;
//   }>
// }



// export interface Card{
//   movie: Array<Movie>;
//   serie: Array<Season>;
// }



export interface Card {
  name: string;
  episode_count?: number;
  id: number;
  season_number: number;
  genre_ids: number;
  poster_path: string;
  title: string;
  vote_average: number;
  release_date: string;
  vote_count: number;
  overview: string;
  original_language: string;
  last_air_date: string;
};

export 	interface Link{
  value: string;
  path: string;
}
export interface MyButton{
  name: string;
  value: string;
  isActive: number;
  handler: React.FC;
}