import { createAction, props } from '@ngrx/store';
import { Day } from 'projects/fitatu/src/app/shared/models/day.model';
import { Month } from 'projects/fitatu/src/app/shared/models/month.model';

export const clearDays = createAction('[History] Clear Days');

export const clearDaysSuccess = createAction(
  '[History] Clear Days From Database Success'
);

export const clearDaysFail = createAction(
  '[History] Clear Days From Database Fail',
  props<{ error: string }>()
);

export const loadDays = createAction('[History] Load Days');

export const loadDaysSuccess = createAction(
  '[History] Load Days Success',
  props<{ days: Day[] }>()
);

export const loadDaysFail = createAction(
  '[History] Load Days Fail',
  props<{ error: string }>()
);

export const saveDays = createAction(
  '[History] Save Days',
  props<{ day: Day }>()
);

export const saveDaysSuccess = createAction(
  '[History] Save Days Success',
  props<{ days: Day[] }>()
);

export const saveDaysFail = createAction(
  '[History] Save Days Fail',
  props<{ error: string }>()
);

export const dayReview = createAction(
  '[History] Day Review',
  props<{ days: Day[] }>()
);

export const selectedMonth = createAction(
  '[History] Selected Month',
  props<{ month: Month }>()
);
