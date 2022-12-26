import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigTreeComponent } from './config-tree.component';

describe('ConfigTreeComponent', () => {
  let component: ConfigTreeComponent;
  let fixture: ComponentFixture<ConfigTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfigTreeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfigTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
