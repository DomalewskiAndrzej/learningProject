import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengesTaskPresenterComponent } from './challenges-task-presenter.component';

describe('ChallengesTaskPresenterComponent', () => {
  let component: ChallengesTaskPresenterComponent;
  let fixture: ComponentFixture<ChallengesTaskPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChallengesTaskPresenterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengesTaskPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
