import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCalculatorPresenterComponent } from './user-calculator-presenter.component';

describe('UserCalculatorPresenterComponent', () => {
  let component: UserCalculatorPresenterComponent;
  let fixture: ComponentFixture<UserCalculatorPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserCalculatorPresenterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCalculatorPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
