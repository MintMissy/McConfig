import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParsingMethodsListComponent } from './parsing-methods-list.component';

describe('ParsingMethodsListComponent', () => {
    let component: ParsingMethodsListComponent;
    let fixture: ComponentFixture<ParsingMethodsListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ParsingMethodsListComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ParsingMethodsListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});