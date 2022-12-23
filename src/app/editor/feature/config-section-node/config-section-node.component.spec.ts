import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigSectionNodeComponent } from './config-section-node.component';

describe('ConfigSectionNodeComponent', () => {
  let component: ConfigSectionNodeComponent;
  let fixture: ComponentFixture<ConfigSectionNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigSectionNodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigSectionNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
