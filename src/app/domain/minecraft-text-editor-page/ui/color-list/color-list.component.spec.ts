import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorListComponent } from './color-list.component';

describe('ColorListComponent', () => {
    let component: ColorListComponent;
    let fixture: ComponentFixture<ColorListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ColorListComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ColorListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});