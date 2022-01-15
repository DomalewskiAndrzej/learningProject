import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { Exercise } from '../../../shared/models/exercise.model';
import { Training } from '../../../shared/models/training.model';
import * as fromApp from '../../../store/app.interface';
import * as trainingActions from './training-state/training.actions';
import * as fromTraining from './training-state/training.reducer';
import { getExercises, getPlans } from './training.index';

@Injectable({ providedIn: 'root' })
export class TrainingFacade {
  trainings$: Observable<Training[]> = this.store.pipe(
    select(fromTraining.selectAll)
  );
  plans$: Observable<Training[]> = this.store.pipe(select(getPlans));

  exercises$: Observable<Exercise[]> = this.store.pipe(select(getExercises));

  constructor(private store: Store<fromApp.AppState>) {}

  saveTraining(training: Training[]): void {
    this.store.dispatch(trainingActions.saveTrainings({ training: training }));
  }

  saveExercises(exercises: Exercise[]): void {
    this.store.dispatch(
      trainingActions.saveExercises({ exercises: exercises })
    );
  }

  clearTrainings(): void {
    this.store.dispatch(trainingActions.clearTrainings());
  }

  loadTrainings(): void {
    this.store.dispatch(trainingActions.loadTrainings());
  }

  loadPlans(): void {
    this.store.dispatch(trainingActions.loadPlans());
  }

  loadExercises(): void {
    this.store.dispatch(trainingActions.loadExercises());
  }
}
