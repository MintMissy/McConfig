import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigSectionComponent } from './config-section.component';

describe('ConfigSectionComponent', () => {
  let component: ConfigSectionComponent;
  let fixture: ComponentFixture<ConfigSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
