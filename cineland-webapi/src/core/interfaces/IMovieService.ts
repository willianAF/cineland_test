import { MovieDTO } from "../../dtos/MovieDTO";

export interface IMovieService{
    getTrendingMoviesAsync(): Promise<MovieDTO[]>;
}