import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import { Recipe } from 'projects/fitatu/src/app/shared/models/recipe.model';

import * as recipesActions from './recipes.actions';

export interface recipesState extends EntityState<Recipe> {
  selectedRecipe: Recipe;
  error: string;
}

export const recipesAdapter: EntityAdapter<Recipe> =
  createEntityAdapter<Recipe>();

export const recipesInitialState = recipesAdapter.getInitialState({
  selectedRecipe: null,
  error: null,
});

export const getRecipesState = createFeatureSelector<recipesState>('recipes');

export const recipesReducer = createReducer(
  recipesInitialState,

  on(
    recipesActions.loadRecipesSuccess,
    recipesActions.saveRecipesSuccess,
    (state, action) => {
      return recipesAdapter.upsertMany(action.recipes, state);
    }
  ),

  on(
    recipesActions.loadRecipesFail,
    recipesActions.saveRecipesFail,
    (state, action) => {
      return { ...state, error: action.error };
    }
  ),

  on(recipesActions.selectedRecipe, (state, action) => {
    return { ...state, selectedRecipe: action.recipe };
  })
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  recipesAdapter.getSelectors(getRecipesState);
