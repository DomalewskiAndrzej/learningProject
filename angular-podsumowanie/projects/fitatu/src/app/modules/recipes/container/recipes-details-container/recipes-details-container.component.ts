import { Component } from '@angular/core';
import { Recipe } from 'projects/fitatu/src/app/shared/models/recipe.model';
import { Observable, Subject } from 'rxjs';
import { RecipesFacade } from '../../store/recipes.facade';

@Component({
  selector: 'app-recipes-details-container',
  templateUrl: './recipes-details-container.component.html',
  styleUrls: ['./recipes-details-container.component.scss'],
})
export class RecipesDetailsContainerComponent {
  recipe: Observable<Recipe> = this.recipesFacade.selectedRecipe$;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private recipesFacade: RecipesFacade) {}
}
