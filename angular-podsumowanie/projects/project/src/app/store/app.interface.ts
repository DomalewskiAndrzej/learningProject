import * as fromAuth from '../modules/auth/store/auth-state/auth.reducer';
import * as fromUser from '../modules/user/store/user-state/user.reducer';

export interface AppState {
  auth: fromAuth.authState;
  user: fromUser.userState;
}
