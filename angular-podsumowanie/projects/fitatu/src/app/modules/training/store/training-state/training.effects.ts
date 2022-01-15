import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, switchMap } from 'rxjs/operators';

import * as trainingActions from './training.actions';
import { TrainingService } from '../../services/training.service';
import { Training } from 'projects/fitatu/src/app/shared/models/training.model';
import { Exercise } from 'projects/fitatu/src/app/shared/models/exercise.model';

@Injectable()
export class TrainingEffects {
  constructor(
    private actions$: Actions,
    private trainingService: TrainingService
  ) {}

  loadPlans$ = createEffect(() =>
    this.actions$.pipe(
      ofType(trainingActions.loadPlans),
      exhaustMap(() =>
        this.trainingService.loadPlans().pipe(
          map((training: Training[]) =>
            trainingActions.loadPlansSuccess({
              training: training,
            })
          ),
          catchError((error) =>
            of(trainingActions.loadPlansFail({ error: error.error }))
          )
        )
      )
    )
  );

  loadTrainings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(trainingActions.loadTrainings),
      exhaustMap(() =>
        this.trainingService.loadTrainings().pipe(
          map((training: Training[]) =>
            trainingActions.loadTrainingsSuccess({
              training: training,
            })
          ),
          catchError((error) =>
            of(trainingActions.loadTrainingsFail({ error: error.error }))
          )
        )
      )
    )
  );

  loadExercises$ = createEffect(() =>
    this.actions$.pipe(
      ofType(trainingActions.loadExercises),
      exhaustMap(() =>
        this.trainingService.loadExercises().pipe(
          map((exercises: Exercise[]) =>
            trainingActions.loadExercisesSuccess({
              exercises: exercises,
            })
          ),
          catchError((error) =>
            of(trainingActions.loadExercisesFail({ error: error.error }))
          )
        )
      )
    )
  );

  saveTrainings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(trainingActions.saveTrainings),
      switchMap((action) =>
        this.trainingService.saveTrainings(action.training).pipe(
          map(() => trainingActions.saveTrainingsSuccess()),
          catchError((error) =>
            of(trainingActions.saveTrainingsFail({ error: error.error }))
          )
        )
      )
    )
  );

  saveExercises$ = createEffect(() =>
    this.actions$.pipe(
      ofType(trainingActions.saveExercises),
      switchMap((action) =>
        this.trainingService.saveExercises(action.exercises).pipe(
          map(() => trainingActions.saveExercisesSuccess()),
          catchError((error) =>
            of(trainingActions.saveExercisesFail({ error: error.error }))
          )
        )
      )
    )
  );

  clearTrainings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(trainingActions.clearTrainings),
      switchMap(() =>
        this.trainingService.clearTrainings().pipe(
          map(() => trainingActions.clearTrainingsSuccess()),
          catchError((error) =>
            of(trainingActions.clearTrainingsFail({ error: error.error }))
          )
        )
      )
    )
  );
}
