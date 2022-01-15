import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';

import * as authActions from './auth.actions';
import { EmailEnum } from 'projects/fitatu/src/app/shared/enums/email-enum';
import { NotificationService } from 'projects/fitatu/src/app/shared/services/notification.service';
import { Auth } from 'projects/project/src/app/shared/models/auth.model';

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
            map((authResponseData: Auth) => {
              this.notificationService.showSuccess(
                'Zarejestrowano pomyślnie',
                'Sukces'
              );
              return authActions.signUpSuccess({
                auth: authResponseData,
                user: {
                  name: action.signUp.name,
                  email: action.signUp.email,
                  games: [],
                  achievements: 0,
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
}
