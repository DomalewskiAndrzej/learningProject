import { createAction, props } from '@ngrx/store';
import { Exercise } from 'projects/fitatu/src/app/shared/models/exercise.model';
import { Training } from 'projects/fitatu/src/app/shared/models/training.model';

export const saveTrainings = createAction(
  '[Training] Save Training',
  props<{ training: Training[] }>()
);

export const saveTrainingsSuccess = createAction(
  '[Training] Save Training Success'
);

export const saveTrainingsFail = createAction(
  '[Training] Save Training Fail',
  props<{ error: string }>()
);

export const clearTrainings = createAction('[Training] Clear Training');

export const clearTrainingsSuccess = createAction(
  '[Training] Clear Training Success'
);

export const clearTrainingsFail = createAction(
  '[Training] Clear Training Fail',
  props<{ error: string }>()
);

export const loadTrainings = createAction('[Training] Load Trainings');

export const loadTrainingsSuccess = createAction(
  '[Training] Load Trainings Success',

  props<{ training: Training[] }>()
);

export const loadTrainingsFail = createAction(
  '[Training] Load Trainings Fail',
  props<{ error: string }>()
);

export const loadPlans = createAction('[Training] Load Plans');

export const loadPlansSuccess = createAction(
  '[Training] Load Plans Success',

  props<{ training: Training[] }>()
);

export const loadPlansFail = createAction(
  '[Training] Load Plans Fail',
  props<{ error: string }>()
);

export const saveExercises = createAction(
  '[Training] Save Exercises',
  props<{ exercises: Exercise[] }>()
);

export const saveExercisesSuccess = createAction(
  '[Training] Save Exercises Success'
);

export const saveExercisesFail = createAction(
  '[Training] Save Exercises Fail',
  props<{ error: string }>()
);

export const loadExercises = createAction('[Training] Load Exercises');

export const loadExercisesSuccess = createAction(
  '[Training] Load Exercises Success',

  props<{ exercises: Exercise[] }>()
);

export const loadExercisesFail = createAction(
  '[Training] Load Exercises Fail',
  props<{ error: string }>()
);
