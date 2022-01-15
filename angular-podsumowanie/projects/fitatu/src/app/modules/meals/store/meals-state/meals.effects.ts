import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import {
  catchError,
  exhaustMap,
  map,
  switchMap,
  withLatestFrom,
} from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { Ingredient } from 'projects/fitatu/src/app/shared/models/ingredient.model';
import { Meal } from 'projects/fitatu/src/app/shared/models/meal.model';
import { MealsService } from '../../services/meals.service';

import * as mealsActions from './meals.actions';
import * as historyActions from '../../../history/store/history-state/history.actions';
import * as fromApp from '../../../../store/app.interface';
import * as fromMeals from './meals.reducer';

@Injectable()
export class MealsEffects {
  constructor(
    private actions$: Actions,
    private mealsService: MealsService,
    private store: Store<fromApp.AppState>
  ) {}

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(mealsActions.loadProducts),
      exhaustMap(() =>
        this.mealsService.loadProducts().pipe(
          map((products: Ingredient[]) =>
            mealsActions.loadProductsSuccess({
              products: products,
            })
          ),
          catchError((error) =>
            of(mealsActions.loadProductsFail({ error: error.error }))
          )
        )
      )
    )
  );

  saveProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(mealsActions.saveProducts),
      switchMap((action) =>
        this.mealsService.saveProducts(action.products).pipe(
          map(() => mealsActions.saveProductsSuccess()),
          catchError((error) =>
            of(mealsActions.saveProductsFail({ error: error.error }))
          )
        )
      )
    )
  );

  loadMeals$ = createEffect(() =>
    this.actions$.pipe(
      ofType(mealsActions.loadMeals),
      switchMap(() =>
        this.mealsService.loadMeals().pipe(
          map((meals: Meal[]) =>
            mealsActions.loadMealsSuccess({
              meals: meals,
            })
          ),
          catchError((error) =>
            of(mealsActions.loadMealsFail({ error: error.error }))
          )
        )
      )
    )
  );

  saveMeals$ = createEffect(() =>
    this.actions$.pipe(
      ofType(mealsActions.saveMeals),
      withLatestFrom(this.store.pipe(select(fromMeals.selectAll))),
      switchMap(([action, entities]) =>
        this.mealsService.saveMeals([action.meal, ...entities]).pipe(
          map(() => mealsActions.saveMealsSuccess()),
          catchError((error) =>
            of(mealsActions.saveMealsFail({ error: error.error }))
          )
        )
      )
    )
  );

  clearMeals$ = createEffect(() =>
    this.actions$.pipe(
      ofType(historyActions.saveDays),
      switchMap(() =>
        this.mealsService.clearMeals().pipe(
          map(() => mealsActions.clearMealsSuccess()),
          catchError((error) =>
            of(mealsActions.clearMealsFail({ error: error.error }))
          )
        )
      )
    )
  );
}
