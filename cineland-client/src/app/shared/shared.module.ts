import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { InfocardComponent } from './components/infocard/infocard.component';
import { DetailcardComponent } from './components/detailcard/detailcard.component';


@NgModule({
  declarations: [HeaderComponent, InfocardComponent, DetailcardComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    HeaderComponent,
    InfocardComponent,
    DetailcardComponent
  ]
})
export class SharedModule { }
