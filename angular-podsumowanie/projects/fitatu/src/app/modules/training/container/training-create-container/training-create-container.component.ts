import { Component, OnDestroy, OnInit } from '@angular/core';
import { Exercise } from 'projects/fitatu/src/app/shared/models/exercise.model';
import { Training } from 'projects/fitatu/src/app/shared/models/training.model';
import { User } from 'projects/fitatu/src/app/shared/models/user.model';
import { NotificationService } from 'projects/fitatu/src/app/shared/services/notification.service';
import { forkJoin, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { UserFacade } from '../../../user/store/user.facade';
import { TrainingFacade } from '../../store/training.facade';

@Component({
  selector: 'app-training-create-container',
  templateUrl: './training-create-container.component.html',
  styleUrls: ['./training-create-container.component.scss'],
})
export class TrainingCreateContainerComponent implements OnInit, OnDestroy {
  exercises: Exercise[] = [];
  trainings: Training[] = [];
  user: User;
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private trainingFacade: TrainingFacade,
    private userFacade: UserFacade,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.trainingFacade.loadExercises();
    this.trainingFacade.loadTrainings();
    this.userFacade.loadUser();
    forkJoin([
      this.trainingFacade.exercises$.pipe(
        tap((exercises: Exercise[]) => {
          this.exercises = [...exercises];
        })
      ),
      this.trainingFacade.trainings$.pipe(
        tap((trainings: Training[]) => {
          this.trainings = trainings;
        })
      ),
      this.userFacade.user$.pipe(
        tap((user: User) => {
          this.user = user;
        })
      ),
    ])
      .pipe(takeUntil(this.destroy$))
      .subscribe();
  }

  saveTraining(training: Training): void {
    this.trainings.push(training);
    this.trainingFacade.saveTraining(this.trainings);
    this.userFacade.saveUser({
      ...this.user,
      challenges: {
        ...this.user.challenges,
        trainings: this.user.challenges.trainings + 1,
      },
    });
    this.notificationService.showSuccess('Pomyślnie zapisano', 'Sukces');
  }

  addExercise(exercise: Exercise): void {
    this.exercises.push(exercise);
    this.trainingFacade.saveExercises(this.exercises);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
