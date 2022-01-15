import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import { User } from 'projects/fitatu/src/app/shared/models/user.model';
import * as userActions from './user.actions';

export interface userState {
  user: User | null;
  selectedChallenge: string | null;
  error: string;
}

export const userInitialState = {
  user: null,
  selectedChallenge: null,
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
  ),

  on(userActions.challengeReview, (state, action) => {
    return { ...state, selectedChallenge: action.challenges };
  }),

  on(userActions.challengeClear, (state) => {
    return { ...state, challenges: null };
  })
);
