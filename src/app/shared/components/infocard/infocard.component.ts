import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-infocard',
  templateUrl: './infocard.component.html',
  styleUrl: './infocard.component.scss',
  standalone: false
})
export class InfocardComponent {
 
  @Input() title: string = '';
  @Input() content: string = '';
  @Input() imgPath: string = '';

}
