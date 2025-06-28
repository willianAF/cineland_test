import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { InfocardComponent } from './components/infocard/infocard.component';
import { DetailcardComponent } from './components/detailcard/detailcard.component';
import { ScrolldownComponent } from './components/scrolldown/scrolldown.component';
import { ConvertTimePipe } from "./pipes/convert-time/convert-time.pipe";
import { FormsModule } from '@angular/forms';
import { MenubarModule } from 'primeng/menubar';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { MatDividerModule } from '@angular/material/divider';
import { AutoFocusModule } from 'primeng/autofocus';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HeaderComponent, InfocardComponent, DetailcardComponent, ScrolldownComponent],
  imports: [
    RouterModule,
    CommonModule,
    MatIconModule,
    ConvertTimePipe,
    FormsModule,
    MenubarModule,
    DrawerModule,
    ButtonModule,
    MatDividerModule,
    AutoFocusModule
],
  exports: [
    HeaderComponent,
    InfocardComponent,
    DetailcardComponent,
    ScrolldownComponent
  ]
})
export class SharedModule { }
