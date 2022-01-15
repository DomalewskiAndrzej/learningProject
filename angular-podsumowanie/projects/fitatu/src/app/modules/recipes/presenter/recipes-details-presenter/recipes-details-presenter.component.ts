import { Component, Input } from '@angular/core';
import { Recipe } from 'projects/fitatu/src/app/shared/models/recipe.model';

@Component({
  selector: 'app-recipes-details-presenter',
  templateUrl: './recipes-details-presenter.component.html',
  styleUrls: ['./recipes-details-presenter.component.scss'],
})
export class RecipesDetailsPresenterComponent {
  @Input() recipe: Recipe;
}
