import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: false,
})

export class HeaderComponent implements OnInit{
  @ViewChild('searchInput') searchInput?: ElementRef <HTMLElement>
  items: MenuItem[] | undefined;  
  drawerOpen:boolean = false;
  searchOpen:boolean = false;



  ngOnInit(){
    this.items = [
      {
        label: "Filmes", routerLink: "/"
      },
      {
        label: "Séries", routerLink: "/"
      }
    ]
  }
}
