import { createSelector } from '@ngrx/store';
import { getHistoryState } from './history-state/history.reducer';
import * as fromHistory from './history-state/history.reducer';

export const dayReview = createSelector(
  getHistoryState,
  (state: fromHistory.historyState) => state.dayReview
);

export const selectedMonth = createSelector(
  getHistoryState,
  (state: fromHistory.historyState) => state.selectedMonth
);
