import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingAddPresenterComponent } from './training-add-presenter.component';

describe('TrainingAddPresenterComponent', () => {
  let component: TrainingAddPresenterComponent;
  let fixture: ComponentFixture<TrainingAddPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrainingAddPresenterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingAddPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
