import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadserviceSectionComponent } from './headservice-section.component';

describe('HeadserviceSectionComponent', () => {
  let component: HeadserviceSectionComponent;
  let fixture: ComponentFixture<HeadserviceSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadserviceSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadserviceSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
