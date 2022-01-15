import * as fromMeals from '../modules/meals/store/meals-state/meals.reducer';
import * as fromDays from '../modules/history/store/history-state/history.reducer';
import * as fromUser from '../modules/user/store/user-state/user.reducer';
import * as fromAuth from '../modules/auth/store/auth-state/auth.reducer';
import * as fromRecipes from '../modules/recipes/store/recipes-state/recipes.reducer';
import * as fromTraining from '../modules/training/store/training-state/training.reducer';
import * as fromClouds from '../modules/clouds/store/clouds-state/clouds.reducer';

export interface AppState {
  meals: fromMeals.mealsState;
  days: fromDays.historyState;
  user: fromUser.userState;
  auth: fromAuth.authState;
  recipes: fromRecipes.recipesState;
  training: fromTraining.trainingState;
  clouds: fromClouds.cloudsState;
}
