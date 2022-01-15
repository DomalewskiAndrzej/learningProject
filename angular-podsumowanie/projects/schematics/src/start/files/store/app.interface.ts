import * as fromAuth from '../modules/auth/store/auth-state/auth.reducer';

export interface AppState {
  auth: fromAuth.authState;
}
