import { User } from './../../../../shared/models/user.model';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import * as userActions from './user.actions';
import * as authActions from '../../../auth/store/auth-state/auth.actions';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  saveUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.saveUser, authActions.signUpSuccess),
      switchMap((action) =>
        this.userService.saveUser(action.user).pipe(
          map(() => userActions.saveUserSuccess({ user: action.user })),
          catchError((error) =>
            of(userActions.saveUserFail({ error: error.error.error.message }))
          )
        )
      )
    )
  );

  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.loadUser),
      switchMap(() =>
        this.userService.loadUser().pipe(
          map((user: User) =>
            userActions.loadUserSuccess({
              user: user,
            })
          ),
          catchError((error) =>
            of(userActions.loadUserFail({ error: error.error.error.message }))
          )
        )
      )
    )
  );
}
