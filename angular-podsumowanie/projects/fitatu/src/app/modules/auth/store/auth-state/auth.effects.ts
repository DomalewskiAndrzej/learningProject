import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Auth } from 'projects/fitatu/src/app/shared/models/auth.model';
import { of } from 'rxjs';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';

import * as authActions from './auth.actions';
import { EmailEnum } from 'projects/fitatu/src/app/shared/enums/email-enum';
import { NotificationService } from 'projects/fitatu/src/app/shared/services/notification.service';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  signUp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.signUp),
      switchMap((action) =>
        this.authService
          .signUp({
            ...action.signUp,
          })
          .pipe(
            map((authResponseData) => {
              this.notificationService.showSuccess(
                'Zarejestrowano pomyślnie',
                'Sukces'
              );
              return authActions.signUpSuccess({
                auth: authResponseData,
                user: {
                  email: action.signUp.email,
                  src: 'https://i1.wp.com/pieskieszycie.pl/wp-content/uploads/2019/07/buldog-to-wymagajaca-rasa.jpg?fit=780%2C760&ssl=1',
                  nick: 'user',
                  dailyKcal: 0,
                  dayNumber: 1,
                  firstLogIn: true,
                  challenges: { diet: 0, weight: 0, recipes: 0, trainings: 0 },
                },
              });
            }),
            catchError((error) => {
              if (error.error.error.message == EmailEnum.emailExists) {
                this.notificationService.showError(
                  'Podany e-mail jest niedostępny!',
                  'Błąd!'
                );
              }
              return of(
                authActions.signUpFail({ error: error.error.error.message })
              );
            })
          )
      )
    )
  );

  logIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.logIn),
      switchMap((action) =>
        this.authService
          .logIn({
            ...action.signUp,
          })
          .pipe(
            map((authResponseData) => {
              this.notificationService.showSuccess(
                'Zalogowano pomyślnie.',
                'Sukces'
              );
              this.router.navigate(['']);
              return authActions.logInSuccess({ auth: authResponseData });
            }),
            catchError((error) => {
              let errorMessage = '';
              if (
                error.error.error.message == EmailEnum.emailNotFound ||
                error.error.error.message == EmailEnum.invalidPassword
              ) {
                errorMessage = 'Podany e-mail lub hasło jest nieprawidłowy!';
              } else if (
                error.error.error.message == EmailEnum.tooManyAttemptsTryLater
              ) {
                errorMessage =
                  'Za dużo nieprawidłowych prób! Spróbuj ponownie później.';
              }
              return of(authActions.logInFail({ error: errorMessage }));
            })
          )
      )
    )
  );

  logout = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authActions.logout),
        tap(() => {
          this.router.navigate(['/auth']);
        })
      ),
    { dispatch: false }
  );

  resetPassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.resetPassword),
      switchMap((action) =>
        this.authService.resetPassword(action.password).pipe(
          map((authResponseData: Auth) =>
            authActions.resetPasswordSuccess({ auth: authResponseData })
          ),
          catchError((error) => of(authActions.resetPasswordFail(error.error)))
        )
      )
    )
  );
}
