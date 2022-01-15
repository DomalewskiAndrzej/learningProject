import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import { Auth } from 'projects/fitatu/src/app/shared/models/auth.model';
import * as authActions from './auth.actions';

export interface authState {
  error: string;
  auth: Auth | null;
}

export const authInitialState = {
  error: '',
  auth: null,
};

export const getAuthState = createFeatureSelector<authState>('auth');

export const authReducer = createReducer(
  authInitialState,

  on(authActions.signUpSuccess, (state, action) => {
    return { ...state, auth: action.auth };
  }),

  on(authActions.signUpFail, (state, action) => {
    return { ...state, error: action.error };
  }),

  on(authActions.logout, authActions.logIn, (state) => {
    return { ...state, auth: null, error: null };
  }),

  on(authActions.logInSuccess, (state, action) => {
    return { ...state, auth: action.auth };
  }),

  on(authActions.logInFail, (state, action) => {
    return { ...state, error: action.error };
  }),

  on(authActions.resetPasswordSuccess, (state, action) => {
    return { ...state, auth: action.auth };
  }),

  on(authActions.resetPasswordFail, (state, action) => {
    return { ...state, error: action.error };
  })
);
