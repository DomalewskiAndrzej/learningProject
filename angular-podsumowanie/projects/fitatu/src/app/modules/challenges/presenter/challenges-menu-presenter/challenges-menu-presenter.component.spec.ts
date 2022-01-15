import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengesMenuPresenterComponent } from './challenges-menu-presenter.component';

describe('ChallengesMenuPresenterComponent', () => {
  let component: ChallengesMenuPresenterComponent;
  let fixture: ComponentFixture<ChallengesMenuPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChallengesMenuPresenterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengesMenuPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
