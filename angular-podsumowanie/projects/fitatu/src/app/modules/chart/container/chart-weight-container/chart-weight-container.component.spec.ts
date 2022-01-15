import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagramWeightContainerComponent } from './diagram-weight-container.component';

describe('DiagramWeightContainerComponent', () => {
  let component: DiagramWeightContainerComponent;
  let fixture: ComponentFixture<DiagramWeightContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiagramWeightContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagramWeightContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
