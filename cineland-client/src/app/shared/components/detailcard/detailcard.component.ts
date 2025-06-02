import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-detailcard',
  templateUrl: './detailcard.component.html',
  styleUrl: './detailcard.component.scss',
  standalone: false
})

export class DetailcardComponent implements AfterViewInit {
  @ViewChild('imageContainer') imageContainer?: ElementRef <HTMLElement>;
  @Input() rankingNumber: number = 0;
  @Input() detailCardData: any = {};
  
  public selected: boolean = false;
  
  public toggleSelected(): void {
    this.selected = !this.selected;  
    this.setBackground();  
  }
  
  public setBackground(): void {
    if(!this.imageContainer)
      return;
    this.imageContainer.nativeElement.style.backgroundImage = !this.selected ? `url("${this.detailCardData.posterPath}")` : `url('${this.detailCardData.backdropPath}')`;
    this.imageContainer.nativeElement.classList.toggle('blur')
  }

  public ngAfterViewInit() : void {
    this.setBackground();  
  }
}
