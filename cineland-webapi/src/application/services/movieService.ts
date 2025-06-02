import { inject, injectable } from "tsyringe";
import { Movie } from "../../core/entities/movie";
import { IMovieService } from "../../core/interfaces/IMovieService";
import { ITmdbAPI } from "../../core/interfaces/ITmdbAPI";
import { MovieDTO } from "../../dtos/MovieDTO";

const imageUrl = 'https://image.tmdb.org/t/p/w1920';

@injectable()
export class MovieService implements IMovieService{

    constructor(@inject("ITmdbAPI") private _tmdbAPI: ITmdbAPI) {}

    public async getTrendingMoviesAsync(): Promise<MovieDTO[]> {
        const movieData = await this._tmdbAPI.getTrendingMoviesAsync();
        if(!movieData)
            return [];
        
        const movies:MovieDTO[] = movieData.map((movie:Movie) => {
            return{
                id: movie.id,
                title: movie.title,
                posterPath: imageUrl + movie.poster_path,
                backdropPath: imageUrl + movie.backdrop_path
            };
        }).slice(0,10);

        return movies;
    }
}