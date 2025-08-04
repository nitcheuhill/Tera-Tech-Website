import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellInfoToolsSectionComponent } from './sell-info-tools-section.component';

describe('SellInfoToolsSectionComponent', () => {
  let component: SellInfoToolsSectionComponent;
  let fixture: ComponentFixture<SellInfoToolsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellInfoToolsSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellInfoToolsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
