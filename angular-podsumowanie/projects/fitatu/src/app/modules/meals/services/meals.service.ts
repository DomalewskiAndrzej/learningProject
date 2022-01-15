import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { exhaustMap, map, take } from 'rxjs/operators';
import { Auth } from '../../../shared/models/auth.model';
import { Ingredient } from '../../../shared/models/ingredient.model';
import { Meal } from '../../../shared/models/meal.model';
import { AuthFacade } from '../../auth/store/auth.facade';

@Injectable({
  providedIn: 'root',
})
export class MealsService {
  private readonly endpoints = {
    products:
      'https://ng-complete-course-by-me-default-rtdb.firebaseio.com/products.json',
    link: 'https://ng-complete-course-by-me-default-rtdb.firebaseio.com/',
    meals: '/meals.json',
  };
  constructor(private http: HttpClient, private authFacade: AuthFacade) {}

  loadProducts(): Observable<Ingredient[]> {
    return this.authFacade.auth$.pipe(
      take(1),
      exhaustMap((auth: Auth) => {
        return this.http
          .get<Ingredient[]>(this.endpoints.products, {
            params: new HttpParams().set('auth', auth?.idToken),
          })
          .pipe(
            map((ingredients) => {
              return ingredients.map((ingredient, index) => {
                return { ...ingredient, id: index++ };
              });
            })
          );
      })
    );
  }

  saveProducts(ingredient: Ingredient[]): Observable<Ingredient[]> {
    return this.authFacade.auth$.pipe(
      take(1),
      exhaustMap((auth: Auth) => {
        return this.http.put<Ingredient[]>(
          this.endpoints.products,
          ingredient,
          {
            params: new HttpParams().set('auth', auth?.idToken),
          }
        );
      })
    );
  }

  saveMeals(meal: Meal[]): Observable<Meal> {
    return this.authFacade.auth$.pipe(
      take(1),
      exhaustMap((auth: Auth) => {
        return this.http.put<Meal>(
          this.endpoints.link + auth.localId + this.endpoints.meals,
          meal,
          {
            params: new HttpParams().set('auth', auth?.idToken),
          }
        );
      })
    );
  }

  loadMeals(): Observable<Meal[]> {
    return this.authFacade.auth$.pipe(
      take(1),
      exhaustMap((auth: Auth) => {
        return this.http
          .get<Meal[]>(
            this.endpoints.link + auth.localId + this.endpoints.meals,
            {
              params: new HttpParams().set('auth', auth?.idToken),
            }
          )
          .pipe(
            map((meal) => {
              if (!meal) {
                return (meal = []);
              } else {
                return meal;
              }
            })
          );
      })
    );
  }

  clearMeals(): Observable<void> {
    return this.authFacade.auth$.pipe(
      take(1),
      exhaustMap((auth: Auth) => {
        return this.http.delete<void>(
          this.endpoints.link + auth.localId + this.endpoints.meals,
          {
            params: new HttpParams().set('auth', auth?.idToken),
          }
        );
      })
    );
  }
}
