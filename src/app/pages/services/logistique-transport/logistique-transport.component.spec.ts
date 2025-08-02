import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogistiqueTransportComponent } from './logistique-transport.component';

describe('LogistiqueTransportComponent', () => {
  let component: LogistiqueTransportComponent;
  let fixture: ComponentFixture<LogistiqueTransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogistiqueTransportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogistiqueTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
