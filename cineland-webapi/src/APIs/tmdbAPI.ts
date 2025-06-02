import axios, { Axios } from 'axios';
import { ITmdbAPI } from '../core/interfaces/ITmdbAPI';
import { Movie } from '../core/entities/movie';
import { injectable } from 'tsyringe';
import { TvShow } from '../core/entities/tvshow';
const apiKey = process.env.TMDB_APIKEY;

@injectable()
export class TmdbAPI implements ITmdbAPI{
    private _httpClient!: Axios;
    private _trendingMoviePath: string = '3/trending/movie/week?language=pt_BR';
    private _trendingTvShowPath: string = '3/trending/tv/week?language=pt_BR';

    constructor() {
        this.createAxiosInstance(); 
    }
    
    private createAxiosInstance(): void {
        this._httpClient = axios.create({
            baseURL: 'https://api.themoviedb.org/',
            headers: {
                Authorization: 'Bearer '+ apiKey,
                'Content-Type': 'application/json'
            }
        });
    }
    
    public async getTrendingMoviesAsync(): Promise<Movie[]> {
        const response = await this._httpClient.get(this._trendingMoviePath);
        if(response.status !== 200)
            return [];
        
        return response.data.results;
    }
    
    public async getTrendingTvShowsAsync(): Promise<TvShow[]> {
        const response = await this._httpClient.get(this._trendingTvShowPath);
        if(response.status !== 200)
            return [];

        return response.data.results;
    }
}