import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Recipe } from 'projects/fitatu/src/app/shared/models/recipe.model';

@Component({
  selector: 'app-recipes-menu-presenter',
  templateUrl: './recipes-menu-presenter.component.html',
  styleUrls: ['./recipes-menu-presenter.component.scss'],
})
export class RecipesMenuPresenterComponent {
  @Input() recipes: Recipe[];
  @Output() recipeSrc = new EventEmitter<string>();
  @Output() newRecipe = new EventEmitter<Recipe>();

  addRecipeForm: FormGroup;
  addRecipeFade = false;
  pattern = '^0*[1-9][0-9]*(.[0-9]+)?|0+.[0-9]*[1-9][0-9]*$';
  errorMessage: string;

  get controlsDescription(): FormArray {
    return this.addRecipeForm.controls.description as FormArray;
  }
  get controlsIngredients(): FormArray {
    return this.addRecipeForm.controls.ingredients as FormArray;
  }

  recipeFade(): void {
    this.addRecipeFade = !this.addRecipeFade;
    this.initForm();
    this.addDescriptionControls();
    this.addIngredientControls();
  }

  getRecipeSrc(src: string): void {
    this.recipeSrc.emit(src);
  }

  addRecipe(): void {
    if (this.addRecipeForm.valid) {
      this.newRecipe.emit(this.addRecipeForm.value);
      this.addRecipeFade = false;
      this.addRecipeForm.reset();
    } else {
      this.errorMessage = 'Formularz został wypełniony nieprawidłowo!';
    }
  }

  addIngredientControls(): void {
    this.controlsIngredients.push(
      new FormGroup({
        name: new FormControl(null, [Validators.required]),
        weight: new FormControl(null, [
          Validators.required,
          Validators.pattern(this.pattern),
        ]),
      })
    );
  }

  removeRecipeIngredientControls(): void {
    if (this.controlsIngredients.length > 1) {
      this.controlsIngredients.removeAt(this.controlsIngredients.length - 1);
    }
  }

  addDescriptionControls(): void {
    this.controlsDescription.push(new FormControl(null, [Validators.required]));
  }

  removeRecipeDescriptionControls(): void {
    if (this.controlsDescription.length > 1) {
      this.controlsDescription.removeAt(this.controlsDescription.length - 1);
    }
  }

  initForm(): void {
    this.addRecipeForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      src: new FormControl(null, [Validators.required]),
      alt: new FormControl(null, [Validators.required]),
      time: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.pattern),
      ]),
      portions: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.pattern),
      ]),
      ingredients: new FormArray([]),
      description: new FormArray([]),
    });
  }
}
