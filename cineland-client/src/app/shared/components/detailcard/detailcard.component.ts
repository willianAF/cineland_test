import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-detailcard',
  templateUrl: './detailcard.component.html',
  styleUrl: './detailcard.component.scss',
  standalone: false
})


export class DetailcardComponent  {
  @ViewChild('infoContainer') infoContainer?: ElementRef <HTMLElement>;
  @Input() rankingNumber: number = 0;
  @Input() detailCardData: any = {};

  public selected: boolean = false;
  
  public toggleSelected(): void {
    this.selected = !this.selected;
    this.showInfo()
  }

  public showInfo(): void{
    
    if(!this.infoContainer)
      return;
    this.infoContainer.nativeElement.classList.toggle('opacity-0')
  }
}
