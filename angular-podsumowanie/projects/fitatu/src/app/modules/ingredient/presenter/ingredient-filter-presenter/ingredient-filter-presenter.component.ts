import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  Input,
  OnDestroy,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ingredient } from 'projects/fitatu/src/app/shared/models/ingredient.model';
import { NewIngredient } from 'projects/fitatu/src/app/shared/models/newIngredient';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-ingredient-filter-presenter',
  templateUrl: './ingredient-filter-presenter.component.html',
  styleUrls: ['./ingredient-filter-presenter.component.scss'],
})
export class IngredientFilterPresenterComponent implements OnInit, OnDestroy {
  @Input() filterData: Ingredient;
  @Input() filterWeight: number;
  @Input() datalist: string[];
  @Output() filterName = new EventEmitter<NewIngredient>();
  @Output() submitForm = new EventEmitter<void>();
  @Output() newProduct = new EventEmitter<Ingredient>();
  @Input() set filterMessage(message: string) {
    this._filterMessage = message;
    this.toggleDetails = false;
    this.toggleNewIngredient = false;
  }
  get filterMessage(): string {
    return this._filterMessage;
  }
  _filterMessage: string;
  filterForm: FormGroup;
  destroy$: Subject<boolean> = new Subject<boolean>();
  toggleDetails = false;
  toggleNewIngredient = false;

  ngOnInit(): void {
    this.filterForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      weight: new FormControl(null, [
        Validators.required,
        Validators.pattern('^0*[1-9][0-9]*(.[0-9]+)?|0+.[0-9]*[1-9][0-9]*$'),
      ]),
    });
    this.filterForm.valueChanges.subscribe((value) => {
      this.filterName.emit(value);
    });
  }

  onSubmit(): void {
    this.submitForm.emit();
  }

  onToggleDetails(): void {
    this.toggleDetails = !this.toggleDetails;
  }

  onToggleNewIngredient(): void {
    this.toggleNewIngredient = !this.toggleNewIngredient;
  }

  addProduct(product: Ingredient): void {
    this.newProduct.emit(product);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
