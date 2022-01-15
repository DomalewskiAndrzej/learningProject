import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingPlansContainerComponent } from './training-plans-container.component';

describe('TrainingPlansContainerComponent', () => {
  let component: TrainingPlansContainerComponent;
  let fixture: ComponentFixture<TrainingPlansContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrainingPlansContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingPlansContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
