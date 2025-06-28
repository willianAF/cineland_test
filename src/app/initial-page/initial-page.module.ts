import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { InitialPageRoutingModule } from './initial-page-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [InitialPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    InitialPageRoutingModule,
    MatIconModule,
    MatDividerModule
  ],
  exports: [InitialPageComponent],
})
export class InitialPageModule { }
