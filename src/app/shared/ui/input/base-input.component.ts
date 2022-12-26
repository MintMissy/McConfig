import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  template: '',
})
export abstract class BaseInputComponent<T> {
  @Input() value!: T;

  @Output() valueChange = new EventEmitter<T>();

  abstract onValueChange(value?: any): void;
}
