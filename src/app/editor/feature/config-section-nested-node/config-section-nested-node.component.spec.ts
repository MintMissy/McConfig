import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigSectionNestedNodeComponent } from './config-section-nested-node.component';

describe('ConfigSectionNestedNodeComponent', () => {
  let component: ConfigSectionNestedNodeComponent;
  let fixture: ComponentFixture<ConfigSectionNestedNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigSectionNestedNodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigSectionNestedNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
