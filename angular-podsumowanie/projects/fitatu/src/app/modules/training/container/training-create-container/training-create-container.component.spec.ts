import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingPlanContainerComponent } from './training-create-container.component';

describe('TrainingPlanContainerComponent', () => {
  let component: TrainingPlanContainerComponent;
  let fixture: ComponentFixture<TrainingPlanContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrainingPlanContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingPlanContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
