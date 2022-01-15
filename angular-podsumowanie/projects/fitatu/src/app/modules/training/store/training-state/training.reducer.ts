import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import { Exercise } from 'projects/fitatu/src/app/shared/models/exercise.model';
import { Training } from 'projects/fitatu/src/app/shared/models/training.model';

import * as trainingActions from './training.actions';

export interface trainingState extends EntityState<Training> {
  plan: Training[];
  exercises: Exercise[];
  error: string;
}

export const trainingAdapter: EntityAdapter<Training> =
  createEntityAdapter<Training>();

export const trainingInitialState = trainingAdapter.getInitialState({
  plan: [],
  exercises: [],
  error: null,
});

export const getTrainingState =
  createFeatureSelector<trainingState>('training');

export const trainingReducer = createReducer(
  trainingInitialState,

  on(trainingActions.loadExercisesSuccess, (state, action) => {
    return { ...state, exercises: action.exercises };
  }),

  on(trainingActions.loadPlansSuccess, (state, action) => {
    return { ...state, plan: action.training };
  }),

  on(trainingActions.loadTrainingsSuccess, (state, action) => {
    return trainingAdapter.upsertMany(action.training, state);
  }),

  on(
    trainingActions.loadPlansFail,
    trainingActions.saveExercisesFail,
    trainingActions.saveTrainingsFail,
    trainingActions.clearTrainingsFail,
    (state, action) => {
      return { ...state, error: action.error };
    }
  )
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  trainingAdapter.getSelectors(getTrainingState);
