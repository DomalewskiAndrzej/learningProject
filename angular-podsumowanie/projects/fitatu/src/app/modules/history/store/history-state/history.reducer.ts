import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import { Day } from 'projects/fitatu/src/app/shared/models/day.model';
import { Month } from 'projects/fitatu/src/app/shared/models/month.model';
import * as historyActions from './history.actions';

export interface historyState extends EntityState<Day> {
  dayReview: Day[];
  selectedMonth: Month;
  error: string;
}

export const historyAdapter: EntityAdapter<Day> = createEntityAdapter<Day>();

export const historyInitialState = historyAdapter.getInitialState({
  dayReview: [],
  selectedMonth: null,
  error: null,
});

export const getHistoryState = createFeatureSelector<historyState>('days');

export const historyReducer = createReducer(
  historyInitialState,

  on(historyActions.saveDaysSuccess, (state, action) => {
    const b = [];
    const a = [...action.days];
    a.map((day, index) => {
      b.push({ ...day, id: index });
    });
    console.log(b);
    return historyAdapter.setAll(b, state);
  }),

  on(historyActions.loadDaysSuccess, (state, action) => {
    return historyAdapter.upsertMany(action.days, state);
  }),

  on(historyActions.clearDays, (state) => {
    return historyAdapter.removeAll(state);
  }),

  on(
    historyActions.clearDaysFail,
    historyActions.saveDaysFail,
    (state, action) => {
      return { ...state, error: action.error };
    }
  ),

  on(historyActions.loadDaysSuccess, (state, action) => {
    return historyAdapter.upsertMany(action.days, state);
  }),

  on(historyActions.dayReview, (state, action) => ({
    ...state,
    dayReview: [...action.days],
  })),

  on(historyActions.selectedMonth, (state, action) => ({
    ...state,
    selectedMonth: { ...action.month },
  }))
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  historyAdapter.getSelectors(getHistoryState);
