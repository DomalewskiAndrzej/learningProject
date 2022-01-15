import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingPlansPresenterComponent } from './training-custom-presenter.component';

describe('TrainingPlansPresenterComponent', () => {
  let component: TrainingPlansPresenterComponent;
  let fixture: ComponentFixture<TrainingPlansPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrainingPlansPresenterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingPlansPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
