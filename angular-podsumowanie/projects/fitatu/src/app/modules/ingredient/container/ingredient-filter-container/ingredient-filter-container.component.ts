import { Observable, Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { MealsFacade } from '../../../meals/store/meals.facade';
import { Ingredient } from 'projects/fitatu/src/app/shared/models/ingredient.model';
import { map, takeUntil } from 'rxjs/operators';
import { NewIngredient } from 'projects/fitatu/src/app/shared/models/newIngredient';

@Component({
  selector: 'app-ingredient-filter-container',
  templateUrl: './ingredient-filter-container.component.html',
  styleUrls: ['./ingredient-filter-container.component.scss'],
})
export class IngredientFilterContainerComponent implements OnInit, OnDestroy {
  datalist$: Observable<string[]> = this.mealsFacade.products$.pipe(
    map((ingredients) => {
      return ingredients.map((ingredient) => {
        return ingredient?.name;
      });
    })
  );
  ingredients: Ingredient[];
  filterMessage: string;
  filterData: Ingredient;
  filterWeight: number;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private mealsFacade: MealsFacade) {}

  ngOnInit(): void {
    this.mealsFacade.loadProducts();
    this.mealsFacade.products$
      .pipe(takeUntil(this.destroy$))
      .subscribe((ingredients) => {
        this.ingredients = ingredients;
      });
  }

  onSubmit(): void {
    this.mealsFacade.addIngredients({
      ...this.filterData,
      amount: this.filterWeight,
    });
  }

  filter(event: NewIngredient): void {
    this.filterWeight = event.weight / 100;
    this.filterMessage = 'Ten produkt jest niedostępny!';
    this.filterData = this.ingredients.find((ingredient) => {
      if (event.name === ingredient?.name) {
        this.filterMessage = 'Ten produkt jest dostępny!';
        return this.filterMessage;
      } else {
        return '';
      }
    });
  }

  addProduct(product: Ingredient): void {
    this.ingredients = [...this.ingredients, product];
    this.mealsFacade.saveProducts(this.ingredients);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
