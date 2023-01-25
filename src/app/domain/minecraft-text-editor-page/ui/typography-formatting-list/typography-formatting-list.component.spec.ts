import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypographyFormattingListComponent } from './typography-formatting-list.component';

describe('TypographyFormattingListComponent', () => {
    let component: TypographyFormattingListComponent;
    let fixture: ComponentFixture<TypographyFormattingListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ TypographyFormattingListComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TypographyFormattingListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});