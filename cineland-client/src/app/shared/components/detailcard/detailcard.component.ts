import { AfterViewInit, Component, Input } from '@angular/core';

@Component({
  selector: 'app-detailcard',
  templateUrl: './detailcard.component.html',
  styleUrl: './detailcard.component.scss',
  standalone: false
})

export class DetailcardComponent implements AfterViewInit {
  
  @Input() rankingNumber: number = 0;
  @Input() detailCardData: any = {};
  
  public selected: boolean = false;
  
  public toggleSelected(): void {
    this.selected = !this.selected;  
    this.setBackground();  
  }
  
  public setBackground(): void {
    const element = document.querySelector(`#image-container-${this.detailCardData.id}`) as HTMLElement;
    element.style.backgroundImage = !this.selected ? `url("${this.detailCardData.posterPath}")` : `url('${this.detailCardData.backdropPath}')`;
    element.classList.toggle('blur')
  }

  ngAfterViewInit() {
    this.setBackground();  
  }
}
