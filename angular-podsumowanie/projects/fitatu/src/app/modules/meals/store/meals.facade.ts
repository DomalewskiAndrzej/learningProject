import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import * as fromApp from '../../../store/app.interface';
import * as mealsActions from './meals-state/meals.actions';
import * as fromMeals from './meals-state/meals.reducer';
import { ingredients, products } from './meals.index';
import { Ingredient } from '../../../shared/models/ingredient.model';
import { Meal } from '../../../shared/models/meal.model';
import { Update } from '@ngrx/entity';

@Injectable({ providedIn: 'root' })
export class MealsFacade {
  meals$: Observable<Meal[]> = this.store.pipe(select(fromMeals.selectAll));
  products$: Observable<Ingredient[]> = this.store.pipe(select(products));
  ingredients$: Observable<Ingredient[]> = this.store.pipe(select(ingredients));

  constructor(private store: Store<fromApp.AppState>) {}

  addIngredients(ingredient: Ingredient): void {
    this.store.dispatch(
      mealsActions.addIngredients({ ingredient: ingredient })
    );
  }
  saveProducts(ingredient: Ingredient[]): void {
    this.store.dispatch(mealsActions.saveProducts({ products: ingredient }));
  }
  deleteIngredients(index: number): void {
    this.store.dispatch(mealsActions.deleteIngredients({ index: index }));
  }
  updateIngredients(ingredient: Ingredient, index: number): void {
    this.store.dispatch(
      mealsActions.updateIngredients({ ingredient: ingredient, index: index })
    );
  }
  loadProducts(): void {
    this.store.dispatch(mealsActions.loadProducts());
  }
  addMeals(meal: Meal): void {
    this.store.dispatch(mealsActions.addMeals({ meal: meal }));
  }
  deleteMeals(index: number): void {
    this.store.dispatch(mealsActions.deleteMeals({ index: index }));
  }
  updateMeals(meal: Update<Meal>): void {
    this.store.dispatch(mealsActions.updateMeals({ meal: meal }));
  }
  saveMeals(meal: Meal): void {
    this.store.dispatch(mealsActions.saveMeals({ meal: meal }));
  }
  loadMeals(): void {
    this.store.dispatch(mealsActions.loadMeals());
  }
}
