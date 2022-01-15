import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengesTaskContainerComponent } from './challenges-task-container.component';

describe('ChallengesTaskContainerComponent', () => {
  let component: ChallengesTaskContainerComponent;
  let fixture: ComponentFixture<ChallengesTaskContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChallengesTaskContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengesTaskContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
