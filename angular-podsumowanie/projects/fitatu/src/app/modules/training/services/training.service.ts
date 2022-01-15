import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { exhaustMap, map, take } from 'rxjs/operators';
import { Auth } from '../../../shared/models/auth.model';
import { Exercise } from '../../../shared/models/exercise.model';
import { Training } from '../../../shared/models/training.model';
import { AuthFacade } from '../../auth/store/auth.facade';

@Injectable({
  providedIn: 'root',
})
export class TrainingService {
  private readonly endpoints = {
    plans:
      'https://ng-complete-course-by-me-default-rtdb.firebaseio.com/plans.json',
    exercises:
      'https://ng-complete-course-by-me-default-rtdb.firebaseio.com/exercises.json',
    link: 'https://ng-complete-course-by-me-default-rtdb.firebaseio.com/',
    trainings: '/trainings.json',
  };
  constructor(private http: HttpClient, private authFacade: AuthFacade) {}

  loadPlans(): Observable<Training[]> {
    return this.authFacade.auth$.pipe(
      take(1),
      exhaustMap((auth: Auth) => {
        return this.http
          .get<Training[]>(this.endpoints.plans, {
            params: new HttpParams().set('auth', auth?.idToken),
          })
          .pipe(
            map((training) => {
              return training.map((training, index) => {
                return { ...training, id: index++ };
              });
            })
          );
      })
    );
  }

  loadTrainings(): Observable<Training[]> {
    return this.authFacade.auth$.pipe(
      take(1),
      exhaustMap((auth: Auth) => {
        return this.http
          .get<Training[]>(
            this.endpoints.link + auth.localId + this.endpoints.trainings,
            {
              params: new HttpParams().set('auth', auth?.idToken),
            }
          )
          .pipe(
            map((trainings: Training[]) => {
              return trainings.map((training, index) => {
                return { ...training, id: index++ };
              });
            })
          );
      })
    );
  }

  loadExercises(): Observable<Exercise[]> {
    return this.authFacade.auth$.pipe(
      take(1),
      exhaustMap((auth: Auth) => {
        return this.http
          .get<Exercise[]>(this.endpoints.exercises, {
            params: new HttpParams().set('auth', auth?.idToken),
          })
          .pipe(
            map((exercises: Exercise[]) => {
              return exercises.map((exercise, index) => {
                return { ...exercise, id: index++ };
              });
            })
          );
      })
    );
  }

  saveExercises(exercises: Exercise[]): Observable<Exercise[]> {
    return this.authFacade.auth$.pipe(
      take(1),
      exhaustMap((auth: Auth) => {
        return this.http.put<Exercise[]>(this.endpoints.exercises, exercises, {
          params: new HttpParams().set('auth', auth?.idToken),
        });
      })
    );
  }

  saveTrainings(training: Training[]): Observable<Training[]> {
    return this.authFacade.auth$.pipe(
      take(1),
      exhaustMap((auth: Auth) => {
        return this.http.put<Training[]>(
          this.endpoints.link + auth.localId + this.endpoints.trainings,
          training,
          {
            params: new HttpParams().set('auth', auth?.idToken),
          }
        );
      })
    );
  }

  clearTrainings(): Observable<void> {
    return this.authFacade.auth$.pipe(
      take(1),
      exhaustMap((auth: Auth) => {
        return this.http.delete<void>(
          this.endpoints.link + auth.localId + this.endpoints.trainings,
          {
            params: new HttpParams().set('auth', auth?.idToken),
          }
        );
      })
    );
  }
}
