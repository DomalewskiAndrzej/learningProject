import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingMenuPresenterComponent } from './training-menu-presenter.component';

describe('TrainingMenuPresenterComponent', () => {
  let component: TrainingMenuPresenterComponent;
  let fixture: ComponentFixture<TrainingMenuPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrainingMenuPresenterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingMenuPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
