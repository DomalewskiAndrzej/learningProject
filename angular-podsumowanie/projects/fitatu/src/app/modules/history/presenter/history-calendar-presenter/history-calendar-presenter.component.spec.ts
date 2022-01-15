import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryCalendarPresenterComponent } from './history-calendar-presenter.component';

describe('HistoryCalendarPresenterComponent', () => {
  let component: HistoryCalendarPresenterComponent;
  let fixture: ComponentFixture<HistoryCalendarPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoryCalendarPresenterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryCalendarPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
