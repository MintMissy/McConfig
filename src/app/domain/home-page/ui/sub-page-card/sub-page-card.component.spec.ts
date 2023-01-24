import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubPageCardComponent } from './sub-page-card.component';

describe('SubPageCardComponent', () => {
  let component: SubPageCardComponent;
  let fixture: ComponentFixture<SubPageCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubPageCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubPageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
