import { Movie } from "../entities/movie";
import { TvShow } from "../entities/tvshow";

export interface ITmdbAPI{
    getTrendingMoviesAsync(): Promise<Movie[]>;
    getTrendingTvShowsAsync(): Promise<TvShow[]>;
}