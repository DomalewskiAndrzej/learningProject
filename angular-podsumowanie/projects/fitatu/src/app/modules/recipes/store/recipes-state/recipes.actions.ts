import { createAction, props } from '@ngrx/store';
import { Recipe } from 'projects/fitatu/src/app/shared/models/recipe.model';

export const loadRecipes = createAction('[Recipes] Load Recipes');

export const loadRecipesSuccess = createAction(
  '[Recipes] Load Recipes Success',
  props<{ recipes: Recipe[] }>()
);

export const loadRecipesFail = createAction(
  '[Recipes] Load Recipes Fail',
  props<{ error: string }>()
);

export const saveRecipes = createAction(
  '[Recipes] Save Recipes',
  props<{ recipes: Recipe[] }>()
);

export const saveRecipesSuccess = createAction(
  '[Recipes] Save Recipes Success',
  props<{ recipes: Recipe[] }>()
);

export const saveRecipesFail = createAction(
  '[Recipes] Save Recipes Fail',
  props<{ error: string }>()
);

export const selectedRecipe = createAction(
  '[Recipes] Selected Recipes',
  props<{ recipe: Recipe }>()
);
