import { Component, OnInit } from '@angular/core';
import { Infocard } from '../../shared/models/infocard';
import { TmdbService } from '../../shared/services/tmdb/tmdb.service';

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrl: './initial-page.component.scss',
  standalone: false
})
export class InitialPageComponent implements OnInit {
  public cards: Infocard[] = [
    {
      title: 'Acompanhe',
      content: 'os filmes e séries que você já assistiu, está assistindo ou deseja assistir.',
      imgPath: '/acompanhe.png'
    },
    {
      title: 'Descubra',
      content: 'novos filmes e séries com base nas suas preferências.',
      imgPath: '/descubra.png'
    },
    {
      title: 'Maratone',
      content: 'suas séries e filmes favoritos e marque seu progresso.',
      imgPath: '/maratone.png'
    }
  ];

  public detailCardsMovies:any[] = [];
  public detailCardsTVShows:any[] = [];

  constructor(private _tmdbService: TmdbService) {}
  
  public ngOnInit(): void {
    this._tmdbService.getWeeklyTrendingMovies().subscribe( {
      next: (response) => {
        this.detailCardsMovies = response
      },
      error: (error) => {
        // TODO
      }
    })
  
    this._tmdbService.getWeeklyTrendingTvShows().subscribe( {
      next: (response) => {
        this.detailCardsTVShows = response
      },
      error: (error) => {
        // TODO
      }
    })
    
  }
}
