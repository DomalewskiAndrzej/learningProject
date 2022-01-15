import { createSelector } from '@ngrx/store';
import * as fromTraining from './training-state/training.reducer';
import { getTrainingState } from './training-state/training.reducer';

export const getPlans = createSelector(
  getTrainingState,
  (state: fromTraining.trainingState) => state.plan
);

export const getExercises = createSelector(
  getTrainingState,
  (state: fromTraining.trainingState) => state.exercises
);
