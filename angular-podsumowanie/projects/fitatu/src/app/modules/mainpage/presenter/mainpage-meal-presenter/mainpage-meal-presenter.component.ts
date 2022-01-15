import { EventEmitter, Input, Component, Output, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Ingredient } from 'projects/fitatu/src/app/shared/models/ingredient.model';
import { Macro } from 'projects/fitatu/src/app/shared/models/macro.model';
import { NotificationService } from 'projects/fitatu/src/app/shared/services/notification.service';

@Component({
  selector: 'app-mainpage-meal-presenter',
  templateUrl: './mainpage-meal-presenter.component.html',
  styleUrls: ['./mainpage-meal-presenter.component.scss'],
})
export class MainpageMealPresenterComponent implements OnInit {
  @Input() mealNumber: number;
  @Input() dailyKcal: number;
  @Input() set dataSource(dataSource: MatTableDataSource<Ingredient>) {
    this._dataSource = dataSource;
    this.macro = { b: 0, t: 0, w: 0, kcal: 0 };
    dataSource.data.forEach((ingredient: Ingredient) => {
      this.macro.b += ingredient.macro.b * ingredient.amount;
      this.macro.t += ingredient.macro.t * ingredient.amount;
      this.macro.w += ingredient.macro.w * ingredient.amount;
      this.macro.kcal += ingredient.macro.kcal * ingredient.amount;
    });
  }
  get dataSource(): MatTableDataSource<Ingredient> {
    return this._dataSource;
  }
  @Output() saveMeal = new EventEmitter<Ingredient>();
  @Output() deleteIngredient = new EventEmitter<number>();
  @Output() newWeight = new EventEmitter<number>();
  @Output() editIngredient = new EventEmitter<{
    ingredient: Ingredient;
    index: number;
  }>();

  macro: Macro;
  _dataSource: MatTableDataSource<Ingredient>;
  displayedColumns: string[] = ['name', 'amount', 'b', 't', 'w', 'kcal'];
  weightForm: FormGroup;
  mealNameForm: FormGroup;
  variable: { [element: string]: boolean } = {};

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.weightForm = new FormGroup({
      weight: new FormControl(null, [
        Validators.required,
        Validators.pattern('^0*[1-9][0-9]*(.[0-9]+)?|0+.[0-9]*[1-9][0-9]*$'),
      ]),
    });
    this.mealNameForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
    });
  }

  editedWeight(): void {
    this.newWeight.emit(this.weightForm.get('weight').value);
  }

  onEdit(ingredient: Ingredient): void {
    if (!this.variable[this.dataSource.data.indexOf(ingredient)]) {
      this.variable[this.dataSource.data.indexOf(ingredient)] =
        !this.variable[this.dataSource.data.indexOf(ingredient)];
    } else {
      this.variable[this.dataSource.data.indexOf(ingredient)] =
        !this.variable[this.dataSource.data.indexOf(ingredient)];
      const index = this.dataSource.data.indexOf(ingredient);
      this.editIngredient.emit({ ingredient, index });
      this.weightForm.reset();
    }
  }

  onSaveMeal(): void {
    this.saveMeal.emit({
      name: this.mealNameForm.get('name').value,
      macro: this.macro,
    });
    this.notificationService.showSuccess(
      'Pomyślnie zapisano posiłek.',
      'Sukces'
    );
    this.mealNameForm.reset();
  }

  onDelete(event: Ingredient): void {
    const index: number = this.dataSource.data.indexOf(event);
    this.deleteIngredient.emit(index);
  }
}
