import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingMenuContainerComponent } from './training-menu-container.component';

describe('TrainingMenuContainerComponent', () => {
  let component: TrainingMenuContainerComponent;
  let fixture: ComponentFixture<TrainingMenuContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrainingMenuContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingMenuContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
