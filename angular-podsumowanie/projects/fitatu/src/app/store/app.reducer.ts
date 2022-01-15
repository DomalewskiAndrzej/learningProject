import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.interface';
import { mealsReducer } from '../modules/meals/store/meals-state/meals.reducer';
import { historyReducer } from '../modules/history/store/history-state/history.reducer';
import { userReducer } from '../modules/user/store/user-state/user.reducer';
import { authReducer } from '../modules/auth/store/auth-state/auth.reducer';
import { recipesReducer } from '../modules/recipes/store/recipes-state/recipes.reducer';
import { trainingReducer } from '../modules/training/store/training-state/training.reducer';
import { cloudsReducer } from '../modules/clouds/store/clouds-state/clouds.reducer';

export const appReducer: ActionReducerMap<AppState> = {
  meals: mealsReducer,
  days: historyReducer,
  user: userReducer,
  auth: authReducer,
  recipes: recipesReducer,
  training: trainingReducer,
  clouds: cloudsReducer,
};
