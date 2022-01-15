import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import { User } from '../../../../shared/models/user.model';
import * as userActions from './user.actions';

export interface userState {
  user: User | null;
  error: string;
}

export const userInitialState = {
  user: null,
  error: '',
};

export const getUserState = createFeatureSelector<userState>('user');

export const userReducer = createReducer(
  userInitialState,

  on(userActions.loadUserFail, (state, action) => {
    return { ...state, error: action.error };
  }),

  on(userActions.saveUserFail, (state, action) => {
    return { ...state, error: action.error };
  }),

  on(
    userActions.saveUserSuccess,
    userActions.loadUserSuccess,
    (state, action) => {
      return { ...state, user: action.user };
    }
  )
);
