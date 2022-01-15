import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.interface';
import { authReducer } from '../modules/auth/store/auth-state/auth.reducer';

export const appReducer: ActionReducerMap<AppState> = {
  auth: authReducer,
};
