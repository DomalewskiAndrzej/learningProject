import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengesMenuContainerComponent } from './challenges-menu-container.component';

describe('ChallengesMenuContainerComponent', () => {
  let component: ChallengesMenuContainerComponent;
  let fixture: ComponentFixture<ChallengesMenuContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChallengesMenuContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengesMenuContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
