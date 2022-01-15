import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { Day } from 'projects/fitatu/src/app/shared/models/day.model';
import { NotificationService } from 'projects/fitatu/src/app/shared/services/notification.service';
import { of } from 'rxjs';
import {
  switchMap,
  map,
  catchError,
  withLatestFrom,
  tap,
} from 'rxjs/operators';
import { HistoryService } from '../../services/history.service';
import * as historyActions from './history.actions';
import * as fromApp from '../../../../store/app.interface';
import * as fromHistory from './history.reducer';

@Injectable()
export class HistoryEffects {
  constructor(
    private actions$: Actions,
    private historyService: HistoryService,
    private notificationService: NotificationService,
    private store: Store<fromApp.AppState>
  ) {}

  saveDays$ = createEffect(() =>
    this.actions$.pipe(
      ofType(historyActions.saveDays),
      withLatestFrom(this.store.pipe(select(fromHistory.selectAll))),
      switchMap(([action, entities]: [{ day: Day }, any]) =>
        this.historyService.saveDays([action.day, ...entities]).pipe(
          map(
            () => {
              this.notificationService.showSuccess(
                'Udało się zapisać dzień z jedzenia',
                'Sukces'
              );
              return historyActions.saveDaysSuccess({
                days: [action.day, ...entities],
              });
            },
            catchError((error) =>
              of(historyActions.saveDaysFail({ error: error.error }))
            )
          )
        )
      )
    )
  );

  loadDays$ = createEffect(() =>
    this.actions$.pipe(
      ofType(historyActions.loadDays),
      switchMap(() =>
        this.historyService.loadDays().pipe(
          map(
            (days: Day[]) =>
              historyActions.loadDaysSuccess({
                days: days,
              }),
            catchError((error) =>
              of(historyActions.loadDaysFail({ error: error.error }))
            )
          )
        )
      )
    )
  );

  clearDays$ = createEffect(() =>
    this.actions$.pipe(
      ofType(historyActions.clearDays),
      switchMap(() =>
        this.historyService.clearDays().pipe(
          map(
            () => historyActions.clearDaysSuccess(),
            catchError((error) =>
              of(historyActions.clearDaysFail({ error: error.error }))
            )
          )
        )
      )
    )
  );
}
