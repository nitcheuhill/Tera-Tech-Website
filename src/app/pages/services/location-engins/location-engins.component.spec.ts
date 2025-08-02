import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationEnginsComponent } from './location-engins.component';

describe('LocationEnginsComponent', () => {
  let component: LocationEnginsComponent;
  let fixture: ComponentFixture<LocationEnginsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationEnginsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocationEnginsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
