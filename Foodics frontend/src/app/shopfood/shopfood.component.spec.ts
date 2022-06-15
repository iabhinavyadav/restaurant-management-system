import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopfoodComponent } from './shopfood.component';

describe('ShopfoodComponent', () => {
  let component: ShopfoodComponent;
  let fixture: ComponentFixture<ShopfoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopfoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
