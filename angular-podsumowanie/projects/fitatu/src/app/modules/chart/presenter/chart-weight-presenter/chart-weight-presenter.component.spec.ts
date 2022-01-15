import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagramWeightPresenterComponent } from './chart-weight-presenter.component';

describe('DiagramWeightPresenterComponent', () => {
  let component: DiagramWeightPresenterComponent;
  let fixture: ComponentFixture<DiagramWeightPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiagramWeightPresenterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagramWeightPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
