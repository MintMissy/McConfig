import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  template: '',
})
export abstract class BaseInputComponent<T> {
  @Input() value!: T;

  @Output() valueChange = new EventEmitter<T>();

  abstract onValueChange(value: any): T;
}
