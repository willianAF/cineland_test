import { Component } from '@angular/core';
import { Infocard } from '../../shared/models/infocard';

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrl: './initial-page.component.scss',
  standalone: false
})
export class InitialPageComponent {
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
  ]

}
