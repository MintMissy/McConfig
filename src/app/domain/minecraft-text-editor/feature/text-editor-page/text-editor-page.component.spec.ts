import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextEditorPageComponent } from './text-editor-page.component';

describe('TextEditorPageComponent', () => {
  let component: TextEditorPageComponent;
  let fixture: ComponentFixture<TextEditorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextEditorPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextEditorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
