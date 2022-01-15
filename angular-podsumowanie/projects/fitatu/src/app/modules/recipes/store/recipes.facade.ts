import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Recipe } from '../../../shared/models/recipe.model';
import * as fromApp from '../../../store/app.interface';
import * as fromRecipes from './recipes-state/recipes.reducer';
import * as recipesActions from './recipes-state/recipes.actions';
import { getSelectedRecipe } from './recipes.index';

@Injectable({ providedIn: 'root' })
export class RecipesFacade {
  recipes$: Observable<Recipe[]> = this.store.pipe(
    select(fromRecipes.selectAll)
  );
  selectedRecipe$: Observable<Recipe> = this.store.pipe(
    select(getSelectedRecipe)
  );

  constructor(private store: Store<fromApp.AppState>) {}

  saveRecipes(recipes: Recipe[]): void {
    this.store.dispatch(recipesActions.saveRecipes({ recipes: recipes }));
  }

  loadRecipes(): void {
    this.store.dispatch(recipesActions.loadRecipes());
  }

  selectedRecipe(recipe: Recipe): void {
    this.store.dispatch(recipesActions.selectedRecipe({ recipe: recipe }));
  }
}
