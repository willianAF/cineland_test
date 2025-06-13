import axios, { Axios } from 'axios';
import { ITmdbAPI } from '../core/interfaces/ITmdbAPI';
import { Movie } from '../core/entities/movie';
import { injectable } from 'tsyringe';
import { TvShow } from '../core/entities/tvshow';
const apiKey = process.env.TMDB_APIKEY;

@injectable()
export class TmdbAPI implements ITmdbAPI{
    private _httpClient!: Axios;
    private _trendingMoviePath: string = '3/trending/movie/week?language=pt-BR';
    private _trendingTvShowPath: string = '3/trending/tv/week?language=pt-BR';
    private _movieDetails: string = '3/movie/';
    private _tvShowDetails: string = '3/tv/'

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
        const trendingData = await this._httpClient.get(this._trendingMoviePath);
        let detailMovieData = [];

        if(trendingData.status !== 200)
            return [];

        
        for(let result of trendingData.data.results){
            let detail = await this.getDetailsMovieAsync(result.id)
            detail == undefined ? '' : detailMovieData.push(detail)
        }
        return detailMovieData
        
    }
    public async getTrendingTvShowsAsync(): Promise<TvShow[]> {
        const trendingData = await this._httpClient.get(this._trendingTvShowPath);
        let detailTvShowData = [];

        if(trendingData.status !== 200)
            return [];

        for(let result of trendingData.data.results){
            let detail = await this.getDetailsTvShowsAsync(result.id)
            detail == undefined ? '' : detailTvShowData.push(detail)
        }
        return detailTvShowData;
    }
    
    public async getDetailsMovieAsync(id:number): Promise<Movie | undefined> {
        const detailMovieData = await this._httpClient.get(this._movieDetails + id + "?language=pt-BR");
        if(detailMovieData.status !== 200)
            return ;

        return detailMovieData.data
    }
    public async getDetailsTvShowsAsync(id:number): Promise<TvShow | undefined>{
        const detailTvShowData = await this._httpClient.get(this._tvShowDetails + id + "?language=pt-BR");
        if(detailTvShowData.status !== 200)
            return ;

        return detailTvShowData.data
    }
}