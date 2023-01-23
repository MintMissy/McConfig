import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './ui/footer/footer.component';
import { NavbarComponent } from './ui/navbar/navbar.component';

@NgModule({
	declarations: [NavbarComponent, FooterComponent],
	imports: [CommonModule, SharedModule, MatToolbarModule, RouterModule],
	exports: [NavbarComponent, FooterComponent],
})
export class CoreModule {}
