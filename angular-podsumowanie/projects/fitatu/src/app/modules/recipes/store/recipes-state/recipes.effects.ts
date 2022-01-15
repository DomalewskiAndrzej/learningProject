import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Recipe } from 'projects/fitatu/src/app/shared/models/recipe.model';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, switchMap } from 'rxjs/operators';
import { RecipesService } from '../../services/recipes.service';

import * as recipesActions from './recipes.actions';

@Injectable()
export class RecipesEffects {
  constructor(
    private actions$: Actions,
    private recipesService: RecipesService
  ) {}

  loadRecipes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(recipesActions.loadRecipes),
      exhaustMap(() =>
        this.recipesService.loadRecipes().pipe(
          map((recipes: Recipe[]) =>
            recipesActions.loadRecipesSuccess({
              recipes,
            })
          ),
          catchError((error) =>
            of(recipesActions.loadRecipesFail({ error: error.error }))
          )
        )
      )
    )
  );

  saveRecipes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(recipesActions.saveRecipes),
      switchMap((action) =>
        this.recipesService.saveRecipes(action.recipes).pipe(
          map(() =>
            recipesActions.saveRecipesSuccess({ recipes: action.recipes })
          ),
          catchError((error) =>
            of(recipesActions.saveRecipesFail({ error: error.error }))
          )
        )
      )
    )
  );
}
