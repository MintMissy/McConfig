import { Directive, HostBinding, HostListener, Input, OnChanges } from '@angular/core';

@Directive({
	selector: '[appAutoResizeInput]',
})
export class AutoResizeInputDirective implements OnChanges {
	@Input() appAutoResizeInput!: number | string;
	@Input() widthUnit = 'ch';

	@HostBinding('style.width')
	private width = 'auto';

	recalculateWidth(): void {
		const width = (this.appAutoResizeInput + '').length + 2;
		this.width = width + this.widthUnit;
	}

	ngOnChanges(): void {
		this.recalculateWidth();
	}

	@HostListener('input')
	onInput() {
		this.recalculateWidth();
	}
}
