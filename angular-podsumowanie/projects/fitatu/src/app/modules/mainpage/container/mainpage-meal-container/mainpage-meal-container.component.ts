import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Ingredient } from 'projects/fitatu/src/app/shared/models/ingredient.model';
import { Meal } from 'projects/fitatu/src/app/shared/models/meal.model';
import { User } from 'projects/fitatu/src/app/shared/models/user.model';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { MealsFacade } from '../../../meals/store/meals.facade';
import { UserFacade } from '../../../user/store/user.facade';

@Component({
  selector: 'app-mainpage-meal-container',
  templateUrl: './mainpage-meal-container.component.html',
  styleUrls: ['./mainpage-meal-container.component.scss'],
})
export class MainpageMealContainerComponent implements OnInit, OnDestroy {
  dataSource: MatTableDataSource<Ingredient>;
  editedWeight: number;
  destroy$: Subject<boolean> = new Subject<boolean>();
  mealNumber$: Observable<number> = this.mealsFacade.meals$.pipe(
    map((meals: Meal[]) => {
      return meals.length + 1;
    })
  );
  dailyKcal$: Observable<number> = this.userFacade.user$.pipe(
    map((user: User) => {
      return user?.dailyKcal;
    })
  );

  constructor(
    private mealsFacade: MealsFacade,
    private userFacade: UserFacade
  ) {}

  ngOnInit(): void {
    this.userFacade.loadUser();
    this.mealsFacade.loadMeals();
    this.mealsFacade.ingredients$
      .pipe(takeUntil(this.destroy$))
      .subscribe((ingredient) => {
        this.dataSource = new MatTableDataSource(ingredient);
      });
  }

  newWeight(e: number): void {
    this.editedWeight = e / 100;
  }

  editIngredient(event: { ingredient: Ingredient; index: number }): void {
    if (this.editedWeight > 0) {
      this.dataSource.data.find((ingredients) => {
        if (event.ingredient === ingredients) {
          const newIngredient = { ...ingredients };
          newIngredient.amount = this.editedWeight;
          this.mealsFacade.updateIngredients(newIngredient, event.index);
        }
      });
    }
  }

  deleteIngredient(index: number): void {
    this.mealsFacade.deleteIngredients(index);
  }

  onSaveMeal(ingredient: Ingredient): void {
    if (this.dataSource.data.length) {
      this.mealsFacade.saveMeals({
        mealName: ingredient.name,
        meal: this.dataSource.data,
        macro: ingredient.macro,
      });
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
