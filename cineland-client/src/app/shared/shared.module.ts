import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { InfocardComponent } from './components/infocard/infocard.component';


@NgModule({
  declarations: [HeaderComponent, InfocardComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    HeaderComponent,
    InfocardComponent
  ]
})
export class SharedModule { }
