import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterielInformatiqueComponent } from './materiel-informatique.component';

describe('MaterielInformatiqueComponent', () => {
  let component: MaterielInformatiqueComponent;
  let fixture: ComponentFixture<MaterielInformatiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterielInformatiqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaterielInformatiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
