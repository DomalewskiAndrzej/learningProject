import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Calendar } from 'projects/fitatu/src/app/shared/models/calendar.model';
import { Day } from 'projects/fitatu/src/app/shared/models/day.model';
import { Month } from 'projects/fitatu/src/app/shared/models/month.model';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { UserFacade } from '../../../user/store/user.facade';
import { HistoryFacade } from '../../store/history.facade';

@Component({
  selector: 'app-history-calendar-container',
  templateUrl: './history-calendar-container.component.html',
  styleUrls: ['./history-calendar-container.component.scss'],
})
export class HistoryCalendarContainerComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  calendar: Calendar[] = [];
  daysFromDatabase: Day[];
  month: Month = {
    dayOfTheWeek: moment().date(1).day(),
    day: 1,
    month: +moment().date(1).locale('pl').format('MM'),
    year: +moment().date(1).locale('pl').format('YYYY'),
    monthString: moment().date(1).locale('pl').format('MMMM'),
    variable: 0,
  };

  constructor(
    private historyFacade: HistoryFacade,
    private router: Router,
    private userFacade: UserFacade
  ) {}

  ngOnInit(): void {
    this.historyFacade.loadDays();
    this.userFacade.loadUser();
    this.generateArray();
    this.historyFacade.selectedMonth$
      .pipe(
        takeUntil(this.destroy$),
        filter((month) => month != null)
      )
      .subscribe((month: Month) => {
        this.month = month;
      });
    this.mathMonths(this.month);
    this.checkDays();
  }

  generateArray(): void {
    for (let i = 1; i < 43; i++) {
      this.calendar.push({ day: i, dayDate: [] });
    }
  }

  clearCalendar(): void {
    this.month = {
      dayOfTheWeek: moment().date(1).day(),
      day: 1,
      month: +moment().date(1).locale('pl').format('MM'),
      year: +moment().date(1).locale('pl').format('YYYY'),
      monthString: moment().date(1).locale('pl').format('MMMM'),
      variable: 0,
    };
    this.mathMonths(this.month);
    this.historyFacade.clearDays();
  }

  previousMonth(): void {
    this.calendar.forEach((calendar: Calendar) => {
      if (calendar.message) {
        calendar.message = '';
        calendar.dayDate = [];
      }
    });
    this.month = {
      monthString: moment()
        .subtract(1 + this.month.variable, 'months')
        .date(1)
        .locale('pl')
        .format('MMMM'),
      dayOfTheWeek: +moment()
        .subtract(1 + this.month.variable, 'months')
        .date(1)
        .locale('pl')
        .format('d'),
      day: 1,
      month: +moment()
        .subtract(1 + this.month.variable, 'months')
        .date(1)
        .locale('pl')
        .format('MM'),
      year: +moment()
        .subtract(1 + this.month.variable, 'months')
        .date(1)
        .locale('pl')
        .format('YYYY'),
      variable: this.month.variable + 1,
    };
    const a = { ...this.month };
    this.mathMonths(this.month);
    this.checkDays();
    this.historyFacade.selectedMonth(a);
  }

  nextMonth(): void {
    this.calendar.forEach((calendar: Calendar) => {
      if (calendar.message) {
        calendar.message = '';
        calendar.dayDate = [];
      }
    });
    this.month = {
      monthString: moment()
        .subtract(-1 + this.month.variable, 'months')
        .date(1)
        .locale('pl')
        .format('MMMM'),
      dayOfTheWeek: +moment()
        .subtract(-1 + this.month.variable, 'months')
        .date(1)
        .locale('pl')
        .format('d'),
      day: 1,
      month: +moment()
        .subtract(-1 + this.month.variable, 'months')
        .date(1)
        .locale('pl')
        .format('MM'),
      year: +moment()
        .subtract(-1 + this.month.variable, 'months')
        .date(1)
        .locale('pl')
        .format('YYYY'),
      variable: this.month.variable - 1,
    };
    const a = { ...this.month };
    this.mathMonths(this.month);
    this.checkDays();
    this.historyFacade.selectedMonth(a);
  }

  mathMonths(month: Month): void {
    let dayOfTheWeek: number;
    if (month.dayOfTheWeek == 0) {
      dayOfTheWeek = 6;
    } else {
      dayOfTheWeek = month.dayOfTheWeek - 1;
    }
    if (
      month.month == 1 ||
      month.month == 3 ||
      month.month == 5 ||
      month.month == 7 ||
      month.month == 10 ||
      month.month == 12
    ) {
      this.mathDays(dayOfTheWeek, 30, 31, month);
    } else if (month.month == 2 && month.year % 4 == 0) {
      this.mathDays(dayOfTheWeek, 31, 29, month);
    } else if (month.month == 2 && month.year % 4 != 0) {
      this.mathDays(dayOfTheWeek, 31, 28, month);
    } else if (month.month == 8) {
      this.mathDays(dayOfTheWeek, 31, 31, month);
    } else {
      this.mathDays(dayOfTheWeek, 31, 30, month);
    }
  }

  mathDays(
    dayOfTheWeek: number,
    previousMonth: number,
    currentMonth: number,
    month: Month
  ): void {
    let nextDays = 1;
    let previousDays = dayOfTheWeek - 1;
    let currentDays = month.day;
    this.calendar.forEach((calendar, index) => {
      if (index < dayOfTheWeek) {
        calendar.day = previousMonth - previousDays;
        if (month.month != 1) {
          calendar.month = month.month - 1;
          calendar.year = month.year;
        } else {
          calendar.month = 12;
          calendar.year = month.year - 1;
        }
        previousDays--;
      } else if (index >= dayOfTheWeek && currentDays <= currentMonth) {
        calendar.day = currentDays;
        calendar.month = month.month;
        calendar.year = month.year;
        currentDays++;
      } else if (currentDays >= currentMonth) {
        calendar.day = nextDays;
        if (month.month != 12) {
          calendar.month = month.month + 1;
          calendar.year = month.year;
        } else {
          calendar.month = 1;
          calendar.year = month.year + 1;
        }
        nextDays++;
      }
      calendar.message = 'Brak dni z jedzenia';
    });
  }

  checkDays(): void {
    this.historyFacade.days$
      .pipe(takeUntil(this.destroy$))
      .subscribe((days: Day[]) => {
        this.daysFromDatabase = days;
        this.daysFromDatabase.forEach((day: Day) => {
          const a = { ...day };
          const oneDay = +a.date?.match(/\d+/g)[0];
          const month = +a.date?.match(/\d+/g)[1];
          const year = +a.date?.match(/\d+/g)[2];
          this.calendar.forEach((calendar: Calendar) => {
            if (
              calendar.day == oneDay &&
              calendar.month == month &&
              calendar.year == year &&
              !calendar.dayDate.includes(a.date)
            ) {
              calendar.dayDate.push(a.date);
              calendar.message = 'Dostępny dzień';
            } else {
              if (calendar.message !== 'Dostępny dzień') {
                calendar.message = 'Brak dni z jedzenia';
              }
            }
          });
        });
      });
  }

  dayInfo(index: number): void {
    const dayDate = this.calendar[index].dayDate;
    const days: Day[] = [];
    this.daysFromDatabase.forEach((day: Day) => {
      dayDate.forEach((date) => {
        if (day.date == date) {
          days.push(day);
        }
      });
    });
    this.historyFacade.dayReview(days);
    this.router.navigate(['/history/details']);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
