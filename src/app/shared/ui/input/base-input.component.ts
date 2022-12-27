import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	template: '',
})
export abstract class BaseInputComponent<T> {
	@Input() value!: T;

	@Output() valueChange = new EventEmitter<T>();

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	abstract onValueChange(value?: any): void;
}
