import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './ui/footer/footer.component';
import { NavbarComponent } from './ui/navbar/navbar.component';

@NgModule({
	declarations: [NavbarComponent, FooterComponent],
	imports: [CommonModule, SharedModule, MatToolbarModule],
	exports: [NavbarComponent, FooterComponent],
})
export class CoreModule {}
