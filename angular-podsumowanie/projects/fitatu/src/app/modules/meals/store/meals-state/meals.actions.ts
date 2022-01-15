import { createAction, props } from '@ngrx/store';
import { Ingredient } from 'projects/fitatu/src/app/shared/models/ingredient.model';
import { Meal } from 'projects/fitatu/src/app/shared/models/meal.model';
import { Update } from 'projects/fitatu/src/app/shared/models/updateEntity.model';

export const loadProducts = createAction('[Meals] Load Products');

export const loadProductsSuccess = createAction(
  '[Meals] Load Products Success',
  props<{ products: Ingredient[] }>()
);

export const loadProductsFail = createAction(
  '[Meals] Load Products Fail',
  props<{ error: string }>()
);

export const saveProducts = createAction(
  '[Meals] Save Products',
  props<{ products: Ingredient[] }>()
);

export const saveProductsSuccess = createAction(
  '[Meals] Save Products Success'
);

export const saveProductsFail = createAction(
  '[Meals] Save Products Fail',
  props<{ error: string }>()
);

export const addIngredients = createAction(
  '[Meals] Add Ingredients',
  props<{ ingredient: Ingredient }>()
);

export const deleteIngredients = createAction(
  '[Meals] Delete Ingredients',
  props<{ index: number }>()
);

export const updateIngredients = createAction(
  '[Meals] Update Ingredients',
  props<{ ingredient: Ingredient; index: number }>()
);

export const addMeals = createAction(
  '[Meals] Add Meals',
  props<{ meal: Meal }>()
);

export const deleteMeals = createAction(
  '[Meals] Delete Meals',
  props<{ index: number }>()
);

export const updateMeals = createAction(
  '[Meals] Update Meals',
  props<{ meal: Update<Meal> }>()
);

export const saveMeals = createAction(
  '[Meals] Save Meals',
  props<{ meal: Meal }>()
);

export const saveMealsSuccess = createAction('[Meals] Save Meals Success');

export const saveMealsFail = createAction(
  '[Meals] Save Meals Fail',
  props<{ error: string }>()
);

export const loadMeals = createAction('[Meals] Load Meals');

export const loadMealsSuccess = createAction(
  '[Meals] Load Meals Success',
  props<{ meals: Meal[] }>()
);

export const loadMealsFail = createAction(
  '[Meals] Load Meals Fail',
  props<{ error: string }>()
);

export const clearMealsSuccess = createAction(
  '[Meals] Clear Meals From Database Success'
);

export const clearMealsFail = createAction(
  '[Meals] Clear Meals From Database Fail',
  props<{ error: string }>()
);
