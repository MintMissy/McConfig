import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsConfiguratorPageComponent } from './items-configurator-page.component';

describe('ItemsConfiguratorPageComponent', () => {
  let component: ItemsConfiguratorPageComponent;
  let fixture: ComponentFixture<ItemsConfiguratorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsConfiguratorPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsConfiguratorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
