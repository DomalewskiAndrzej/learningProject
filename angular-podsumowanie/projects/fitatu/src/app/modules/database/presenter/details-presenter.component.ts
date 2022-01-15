import { Component, Input, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Ingredient } from '../../../shared/models/ingredient.model';

@Component({
  selector: 'app-details-presenter',
  templateUrl: './details-presenter.component.html',
  styleUrls: ['./details-presenter.component.scss'],
})
export class DetailsPresenterComponent {
  @Input() set products(products: MatTableDataSource<Ingredient>) {
    this._products = products;
    products.sort = this.sort;
  }
  get products(): MatTableDataSource<Ingredient> {
    return this._products;
  }
  name = new FormControl();
  _products: MatTableDataSource<Ingredient>;
  @Input() datalist: string[];
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['name', 'amount', 'b', 't', 'w', 'kcal'];
}
