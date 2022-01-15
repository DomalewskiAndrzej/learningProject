import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingPlanPresenterComponent } from './training-create-presenter.component';

describe('TrainingPlanPresenterComponent', () => {
  let component: TrainingPlanPresenterComponent;
  let fixture: ComponentFixture<TrainingPlanPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrainingPlanPresenterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingPlanPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
