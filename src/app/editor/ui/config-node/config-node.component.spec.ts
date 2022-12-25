import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigNodeComponent } from './config-node.component';

describe('ConfigNodeComponent', () => {
  let component: ConfigNodeComponent;
  let fixture: ComponentFixture<ConfigNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfigNodeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfigNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
