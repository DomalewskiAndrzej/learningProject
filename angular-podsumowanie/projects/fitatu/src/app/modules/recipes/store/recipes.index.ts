import { createSelector } from '@ngrx/store';
import * as fromRecipes from './recipes-state/recipes.reducer';

export const getSelectedRecipe = createSelector(
  fromRecipes.getRecipesState,
  (state: fromRecipes.recipesState) => state.selectedRecipe
);
