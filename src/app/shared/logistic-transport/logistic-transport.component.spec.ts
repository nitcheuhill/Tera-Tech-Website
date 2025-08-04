import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticTransportComponent } from './logistic-transport.component';

describe('LogisticTransportComponent', () => {
  let component: LogisticTransportComponent;
  let fixture: ComponentFixture<LogisticTransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogisticTransportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogisticTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
