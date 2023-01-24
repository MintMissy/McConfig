import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { SubPageCardComponent } from './ui/sub-page-card/sub-page-card.component';


@NgModule({
  declarations: [
    SubPageCardComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule
  ]
})
export class HomePageModule { }
