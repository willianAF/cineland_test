import { inject, injectable } from "tsyringe";
import { ITVShowService } from "../../core/interfaces/ITVShowService";
import { ITmdbAPI } from "../../core/interfaces/ITmdbAPI";
import { TVShowDTO } from "../../dtos/TVShowDTO";
import { TvShow } from "../../core/entities/tvshow";

const imageUrl = 'https://image.tmdb.org/t/p/w1920';

@injectable()
export class TvShowService implements ITVShowService{
    constructor(@inject("ITmdbAPI") private _tmdbAPI: ITmdbAPI) {}

    public async getTrendingTvShowsAsync(): Promise<TVShowDTO[]> {
        const tvShowData = await this._tmdbAPI.getTrendingTvShowsAsync();
        if(!tvShowData)
            return [];

        const tvShow:TVShowDTO[] = tvShowData.map((tvShow:TvShow) => {
            return{ 
                id: tvShow.id,
                title: tvShow.title,
                posterPath: imageUrl + tvShow.poster_path,
                backdropPath: imageUrl + tvShow.backdrop_path
            };
        }).slice(0,10);
    
        return tvShow;
    }
}