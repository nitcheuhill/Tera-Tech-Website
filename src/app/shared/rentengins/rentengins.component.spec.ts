import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentenginsComponent } from './rentengins.component';

describe('RentenginsComponent', () => {
  let component: RentenginsComponent;
  let fixture: ComponentFixture<RentenginsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RentenginsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentenginsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
