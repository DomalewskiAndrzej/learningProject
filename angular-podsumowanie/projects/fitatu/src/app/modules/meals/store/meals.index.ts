import { createSelector } from '@ngrx/store';
import * as fromMeals from './meals-state/meals.reducer';
import { getMealsState } from './meals-state/meals.reducer';

export const products = createSelector(
  getMealsState,
  (state: fromMeals.mealsState) => state.products
);

export const ingredients = createSelector(
  getMealsState,
  (state: fromMeals.mealsState) => state.ingredients
);
