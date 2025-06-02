import { TVShowDTO } from "../../dtos/TVShowDTO";

export interface ITVShowService{
    getTrendingTvShowsAsync(): Promise<TVShowDTO[]>;
}