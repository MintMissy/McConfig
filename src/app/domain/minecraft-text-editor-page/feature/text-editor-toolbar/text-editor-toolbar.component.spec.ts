import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextEditorToolbarComponent } from './text-editor-toolbar.component';

describe('TextEditorToolbarComponent', () => {
    let component: TextEditorToolbarComponent;
    let fixture: ComponentFixture<TextEditorToolbarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ TextEditorToolbarComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TextEditorToolbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});