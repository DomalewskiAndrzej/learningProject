import { Component, Input } from '@angular/core';
import { Ingredient } from 'projects/fitatu/src/app/shared/models/ingredient.model';

@Component({
  selector: 'app-ingredient-details-presenter',
  templateUrl: './ingredient-details-presenter.component.html',
  styleUrls: ['./ingredient-details-presenter.component.scss'],
})
export class IngredientDetailsPresenterComponent {
  @Input() filterWeight: number;
  @Input() set filterData(filterData: Ingredient) {
    this._filterData = filterData;
    this.dataSource.push(filterData);
  }
  get filterData(): Ingredient {
    return this._filterData;
  }

  _filterData: Ingredient;
  displayedColumns: string[] = ['b', 't', 'w', 'kcal'];
  dataSource: Ingredient[] = [];
}
