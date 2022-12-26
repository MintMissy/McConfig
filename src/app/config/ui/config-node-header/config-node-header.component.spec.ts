import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigNodeHeaderComponent } from './config-node-header.component';

describe('ConfigNodeHeaderComponent', () => {
  let component: ConfigNodeHeaderComponent;
  let fixture: ComponentFixture<ConfigNodeHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfigNodeHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfigNodeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
