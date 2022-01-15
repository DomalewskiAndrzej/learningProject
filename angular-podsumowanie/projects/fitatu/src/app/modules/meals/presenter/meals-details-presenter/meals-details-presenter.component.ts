import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ingredient } from 'projects/fitatu/src/app/shared/models/ingredient.model';
import { Macro } from 'projects/fitatu/src/app/shared/models/macro.model';
import { Meal } from 'projects/fitatu/src/app/shared/models/meal.model';

@Component({
  selector: 'app-meals-details-presenter',
  templateUrl: './meals-details-presenter.component.html',
  styleUrls: ['./meals-details-presenter.component.scss'],
})
export class MealsDetailsPresenterComponent implements OnInit {
  @Input() set meals(meals: Meal[]) {
    this._meals = meals;
    if (meals.length == 0) {
      this.message = 'Nie masz żadnych posiłków';
    } else {
      this.message = '';
    }
    this.macro = { b: 0, t: 0, w: 0, kcal: 0 };
    meals.forEach((meal: Meal) => {
      this.macro.b += meal.macro.b;
      this.macro.t += meal.macro.t;
      this.macro.w += meal.macro.w;
      this.macro.kcal += meal.macro.kcal;
    });
  }
  get meals(): Meal[] {
    return this._meals;
  }

  @Input() dailyKcal: number;
  @Output() deleteMeal = new EventEmitter<Meal>();
  @Output() saveDay = new EventEmitter<Ingredient>();
  macro: Macro;
  _meals: Meal[];
  message: string;
  displayedColumns: string[] = ['name', 'amount', 'b', 't', 'w', 'kcal'];
  variable: { [element: string]: boolean } = {};
  dayNameForm: FormGroup;

  ngOnInit(): void {
    this.dayNameForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
    });
  }

  onDelete(elements: Meal): void {
    this.deleteMeal.emit(elements);
  }
  onMealFade(elements: Meal): void {
    if (!this.variable[this.meals.indexOf(elements)]) {
      this.variable[this.meals.indexOf(elements)] =
        !this.variable[this.meals.indexOf(elements)];
    } else {
      this.variable[this.meals.indexOf(elements)] =
        !this.variable[this.meals.indexOf(elements)];
    }
  }
  onSaveDay(): void {
    this.saveDay.emit({
      name: this.dayNameForm.controls.name.value,
      macro: this.macro,
    });
    this.dayNameForm.reset();
  }
}
