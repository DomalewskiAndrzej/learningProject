import { createAction, props } from '@ngrx/store';
import { User } from '../../../../shared/models/user.model';

export const loadUser = createAction('[User] Load User');

export const loadUserSuccess = createAction(
  '[User] Load User Success',
  props<{ user: User }>()
);

export const loadUserFail = createAction(
  '[User] Load User Fail',
  props<{ error: string }>()
);

export const saveUser = createAction(
  '[User] Save User',
  props<{ user: User }>()
);

export const saveUserSuccess = createAction(
  '[User] Save User Success',
  props<{ user: User }>()
);

export const saveUserFail = createAction(
  '[User] Save User Fail',
  props<{ error: string }>()
);
