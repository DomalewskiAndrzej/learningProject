import { createAction, props } from '@ngrx/store';
import { Auth } from 'projects/fitatu/src/app/shared/models/auth.model';
import { SignUp } from 'projects/fitatu/src/app/shared/models/signUp.model';
import { User } from 'projects/fitatu/src/app/shared/models/user.model';

export const signUp = createAction(
  '[Auth] Sign Up',
  props<{ signUp: SignUp }>()
);

export const signUpSuccess = createAction(
  '[Auth] Sign Up Success',
  props<{ user: User; auth: Auth }>()
);

export const signUpFail = createAction(
  '[Auth] Sign Up Fail',
  props<{ error: string }>()
);

export const logIn = createAction('[Auth] Log In', props<{ signUp: SignUp }>());

export const logInSuccess = createAction(
  '[Auth] Log In Success',
  props<{ auth: Auth }>()
);

export const logInFail = createAction(
  '[Auth] Log In Fail',
  props<{ error: string }>()
);

export const logout = createAction('[Auth] Logout');

export const resetPassword = createAction(
  '[Auth] Reset Password',
  props<{ password: string }>()
);

export const resetPasswordSuccess = createAction(
  '[Auth] Reset Password Success',
  props<{ auth: Auth }>()
);

export const resetPasswordFail = createAction(
  '[Auth] Reset Password Fail',
  props<{ error: string }>()
);
