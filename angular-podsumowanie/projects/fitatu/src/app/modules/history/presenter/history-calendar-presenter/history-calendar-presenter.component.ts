import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Calendar } from 'projects/fitatu/src/app/shared/models/calendar.model';
import { Month } from 'projects/fitatu/src/app/shared/models/month.model';

@Component({
  selector: 'app-history-calendar-presenter',
  templateUrl: './history-calendar-presenter.component.html',
  styleUrls: ['./history-calendar-presenter.component.scss'],
})
export class HistoryCalendarPresenterComponent {
  @Input() set calendar(calendar: Calendar[]) {
    this._calendar = calendar;
  }
  get calendar(): Calendar[] {
    return this._calendar;
  }
  @Input() set month(month: Month) {
    this._month = month;
  }
  get month(): Month {
    return this._month;
  }
  @Output() info = new EventEmitter<number>();
  @Output() previous = new EventEmitter<void>();
  @Output() next = new EventEmitter<void>();
  @Output() clear = new EventEmitter<void>();
  _calendar: Calendar[];
  _month: Month;
  dayOfTheWeek: string[] = [
    'Poniedziałek',
    'Wtorek',
    'Środa',
    'Czwartek',
    'Piątek',
    'Sobota',
    'Niedziela',
  ];

  dayInfo(i: number): void {
    this.info.emit(i);
  }
  previousMonth(): void {
    this.previous.emit();
  }
  nextMonth(): void {
    this.next.emit();
  }

  clearCalendar(): void {
    this.clear.emit();
  }

  getClass(element: Calendar, i: number): string {
    if ((element.day > 20 && i < 7) || (element.day < 15 && i > 27)) {
      return 'day--colored';
    } else {
      return '';
    }
  }
}
