import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TmdbService {

  private baseUrl: string = 'http://localhost:3000'; 
  private trendingMoviesUrl: string = '/trending/movie/week';

  constructor( private _http: HttpClient ) { }

  public getWeeklyTrendingMovies(): Observable<any> {
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json',
      }
    };
    const url = `${this.baseUrl}${this.trendingMoviesUrl}`;
    
    return this._http.get(url, httpOptions);
    
  }
}
