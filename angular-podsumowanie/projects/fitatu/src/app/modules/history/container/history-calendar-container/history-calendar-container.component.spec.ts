import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryCalendarContainerComponent } from './history-calendar-container.component';

describe('HistoryCalendarContainerComponent', () => {
  let component: HistoryCalendarContainerComponent;
  let fixture: ComponentFixture<HistoryCalendarContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoryCalendarContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryCalendarContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
