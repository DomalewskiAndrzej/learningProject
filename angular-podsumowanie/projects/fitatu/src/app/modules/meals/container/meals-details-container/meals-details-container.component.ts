import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MealsFacade } from '../../store/meals.facade';
import { HistoryFacade } from '../../../history/store/history.facade';
import { Day } from 'projects/fitatu/src/app/shared/models/day.model';
import { Meal } from 'projects/fitatu/src/app/shared/models/meal.model';
import { UserFacade } from '../../../user/store/user.facade';
import { User } from 'projects/fitatu/src/app/shared/models/user.model';
import { map } from 'rxjs/operators';
import { Ingredient } from 'projects/fitatu/src/app/shared/models/ingredient.model';

@Component({
  selector: 'app-meals-details-container',
  templateUrl: './meals-details-container.component.html',
  styleUrls: ['./meals-details-container.component.scss'],
})
export class MealsDetailsContainerComponent implements OnInit, OnDestroy {
  meals: Observable<Meal[]> = this.mealsFacade.meals$;
  days: Observable<Day[]> = this.historyFacade.days$;
  destroy$: Subject<boolean> = new Subject<boolean>();
  user: Observable<User> = this.userFacade.user$;
  dailyKcal: Observable<number> = this.user.pipe(
    map((user: User) => {
      return user.dailyKcal;
    })
  );

  constructor(
    private mealsFacade: MealsFacade,
    private historyFacade: HistoryFacade,
    private userFacade: UserFacade
  ) {}

  ngOnInit(): void {
    this.mealsFacade.loadMeals();
    this.userFacade.loadUser();
    this.historyFacade.loadDays();
  }

  onDeleteMeal(index: Meal): void {
    this.mealsFacade.deleteMeals(index.id);
  }

  onSaveDay(ingredient: Ingredient): void {
    let newMeals: Meal[];
    this.meals.subscribe((meals: Meal[]) => {
      return (newMeals = meals);
    });
    let newUser: User;
    this.user.subscribe((user: User) => {
      return (newUser = user);
    });
    this.historyFacade.saveDays({
      dayName: ingredient.name,
      day: newMeals,
      date: newUser.dayDate,
      dayInfo: {
        macro: ingredient.macro,
        userKcal: newUser.dailyKcal,
      },
    });
    this.userFacade.saveUser({
      ...newUser,
      dayDate: null,
      challenges: {
        ...newUser.challenges,
        diet: newUser.challenges.diet + 1,
      },
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
