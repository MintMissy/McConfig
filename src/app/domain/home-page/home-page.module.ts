import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { SubPageCardComponent } from './ui/sub-page-card/sub-page-card.component';

@NgModule({
	declarations: [SubPageCardComponent, HomePageComponent],
	imports: [CommonModule, HomePageRoutingModule, SharedModule],
})
export class HomePageModule {}
