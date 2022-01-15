import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import { Ingredient } from 'projects/fitatu/src/app/shared/models/ingredient.model';
import { Meal } from 'projects/fitatu/src/app/shared/models/meal.model';

import * as mealsActions from './meals.actions';

export interface mealsState extends EntityState<Meal> {
  ingredients: Ingredient[];
  products: Ingredient[];
  dayDate: string;
  error: string;
}

export const mealsAdapter: EntityAdapter<Meal> = createEntityAdapter<Meal>();

export const mealsInitialState = mealsAdapter.getInitialState({
  ingredients: [],
  products: [],
  dayDate: '',
  error: null,
});

export const getMealsState = createFeatureSelector<mealsState>('meals');

export const mealsReducer = createReducer(
  mealsInitialState,

  on(mealsActions.loadProductsSuccess, (state, action) => {
    return { ...state, products: action.products };
  }),

  on(mealsActions.loadProductsFail, (state, action) => {
    return { ...state, error: action.error };
  }),

  on(mealsActions.addIngredients, (state, action) => ({
    ...state,
    ingredients: [
      ...state.ingredients,
      { ...action.ingredient, id: state.ingredients.length },
    ],
  })),

  on(mealsActions.deleteIngredients, (state, action) => ({
    ...state,
    ingredients: state.ingredients.filter(
      (ingredient: Ingredient, index: number) => index !== action.index
    ),
  })),

  on(mealsActions.updateIngredients, (state, action) => {
    let newIngredient = [...state.ingredients];
    newIngredient = newIngredient.map((ingredient, index) => {
      if (index == action.index) {
        return (ingredient = action.ingredient);
      } else {
        return ingredient;
      }
    });
    return { ...state, ingredients: newIngredient };
  }),

  on(mealsActions.saveMeals, (state) => {
    return { ...state, ingredients: [] };
  }),

  on(mealsActions.addMeals, (state, action) => {
    const a = { ...action.meal, id: state.ids.length };
    return mealsAdapter.addOne(a, state);
  }),

  on(mealsActions.deleteMeals, (state, action) => {
    return mealsAdapter.removeOne(action.index, state);
  }),

  on(mealsActions.loadMealsSuccess, (state, action) => {
    return mealsAdapter.upsertMany(action.meals, state);
  }),

  on(mealsActions.loadMealsFail, (state, action) => {
    return { ...state, error: action.error };
  }),

  on(mealsActions.clearMealsSuccess, (state) => {
    return mealsAdapter.removeAll(state);
  }),

  on(mealsActions.clearMealsFail, (state, action) => {
    return { ...state, error: action.error };
  })
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  mealsAdapter.getSelectors(getMealsState);
