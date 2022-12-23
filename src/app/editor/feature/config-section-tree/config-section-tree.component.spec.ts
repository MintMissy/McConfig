import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigSectionTreeComponent } from './config-section-tree.component';

describe('ConfigSectionTreeComponent', () => {
  let component: ConfigSectionTreeComponent;
  let fixture: ComponentFixture<ConfigSectionTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigSectionTreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigSectionTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
