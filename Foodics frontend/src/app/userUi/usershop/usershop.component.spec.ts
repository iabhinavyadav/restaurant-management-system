import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsershopComponent } from './usershop.component';

describe('UsershopComponent', () => {
  let component: UsershopComponent;
  let fixture: ComponentFixture<UsershopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsershopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsershopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
