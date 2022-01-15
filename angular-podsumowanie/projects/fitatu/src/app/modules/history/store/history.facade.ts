import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Day } from '../../../shared/models/day.model';
import { Month } from '../../../shared/models/month.model';
import * as fromApp from '../../../store/app.interface';
import * as historyActions from './history-state/history.actions';
import * as fromHistory from './history-state/history.reducer';
import { dayReview, selectedMonth } from './history.index';

@Injectable({ providedIn: 'root' })
export class HistoryFacade {
  days$: Observable<Day[]> = this.store.pipe(select(fromHistory.selectAll));
  dayReview$: Observable<Day[]> = this.store.pipe(select(dayReview));
  selectedMonth$: Observable<Month> = this.store.pipe(select(selectedMonth));

  constructor(private store: Store<fromApp.AppState>) {}

  saveDays(day: Day): void {
    this.store.dispatch(historyActions.saveDays({ day }));
  }

  loadDays(): void {
    this.store.dispatch(historyActions.loadDays());
  }

  dayReview(days: Day[]): void {
    this.store.dispatch(historyActions.dayReview({ days }));
  }

  selectedMonth(month: Month): void {
    this.store.dispatch(historyActions.selectedMonth({ month }));
  }

  clearDays(): void {
    this.store.dispatch(historyActions.clearDays());
  }
}
