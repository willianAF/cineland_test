import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { InitialPageRoutingModule } from './initial-page-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [InitialPageComponent],
  imports: [
    MatIconModule,
    CommonModule,
    InitialPageRoutingModule,
    SharedModule
  ],
  exports: [InitialPageComponent],
})
export class InitialPageModule { }
