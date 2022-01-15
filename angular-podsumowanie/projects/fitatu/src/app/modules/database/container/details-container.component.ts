import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Ingredient } from '../../../shared/models/ingredient.model';
import { MealsFacade } from '../../meals/store/meals.facade';

@Component({
  selector: 'app-details-container',
  templateUrl: './details-container.component.html',
  styleUrls: ['./details-container.component.scss'],
})
export class DetailsContainerComponent implements OnInit {
  destroy$: Subject<boolean> = new Subject<boolean>();
  products$: Observable<MatTableDataSource<Ingredient>> =
    this.mealsFacade.products$.pipe(
      map((products: Ingredient[]) => {
        this.datalist = products.map((products) => products?.name);
        const a = [...products];
        return new MatTableDataSource(
          a.sort((a, b) => (a.name > b.name ? 1 : -1))
        );
      })
    );
  datalist: string[] = [];

  constructor(private mealsFacade: MealsFacade) {}

  ngOnInit(): void {
    this.mealsFacade.loadProducts();
  }
}
