import { Input } from '@angular/core';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ingredient } from 'projects/fitatu/src/app/shared/models/ingredient.model';
import { NotificationService } from 'projects/fitatu/src/app/shared/services/notification.service';

@Component({
  selector: 'app-ingredient-newingredient-presenter',
  templateUrl: './ingredient-newingredient-presenter.component.html',
  styleUrls: ['./ingredient-newingredient-presenter.component.scss'],
})
export class IngredientNewingredientPresenterComponent implements OnInit {
  @Input() ingredientsNames: string[];
  @Output() addProduct = new EventEmitter<Ingredient>();
  newIngredientForm: FormGroup;
  pattern = '^0*[1-9][0-9]*(.[0-9]+)?|0+.[0-9]*[1-9][0-9]*$';

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.newIngredientForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      b: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.pattern),
      ]),
      t: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.pattern),
      ]),
      w: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.pattern),
      ]),
      kcal: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.pattern),
      ]),
    });
  }

  onSubmitAdd(): void {
    if (
      this.ingredientsNames.includes(this.newIngredientForm.controls.name.value)
    ) {
      this.notificationService.showError('Ten produkt już istnieje!', 'Błąd!');
    } else {
      this.addProduct.emit({
        name: this.newIngredientForm.controls.name.value,
        amount: 0,
        macro: {
          b: this.newIngredientForm.controls.b.value,
          t: this.newIngredientForm.controls.t.value,
          w: this.newIngredientForm.controls.w.value,
          kcal: this.newIngredientForm.controls.kcal.value,
        },
      });
      this.newIngredientForm.reset();
      this.notificationService.showSuccess(
        'Udało się dodać składnik do bazy danych',
        'Sukces'
      );
    }
  }
}
