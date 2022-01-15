import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { exhaustMap, map, take } from 'rxjs/operators';
import { Auth } from '../../../shared/models/auth.model';
import { Recipe } from '../../../shared/models/recipe.model';
import { AuthFacade } from '../../auth/store/auth.facade';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private readonly endpoints = {
    recipes:
      'https://ng-complete-course-by-me-default-rtdb.firebaseio.com/recipes.json',
  };
  constructor(private http: HttpClient, private authFacade: AuthFacade) {}

  loadRecipes(): Observable<Recipe[]> {
    return this.authFacade.auth$.pipe(
      take(1),
      exhaustMap((auth: Auth) => {
        return this.http
          .get<Recipe[]>(this.endpoints.recipes, {
            params: new HttpParams().set('auth', auth?.idToken),
          })
          .pipe(
            map((recipes) => {
              return recipes.map((recipes, index) => {
                return { ...recipes, id: index++ };
              });
            })
          );
      })
    );
  }

  saveRecipes(recipes: Recipe[]): Observable<Recipe[]> {
    return this.authFacade.auth$.pipe(
      take(1),
      exhaustMap((auth: Auth) => {
        return this.http.put<Recipe[]>(this.endpoints.recipes, recipes, {
          params: new HttpParams().set('auth', auth?.idToken),
        });
      })
    );
  }
}
