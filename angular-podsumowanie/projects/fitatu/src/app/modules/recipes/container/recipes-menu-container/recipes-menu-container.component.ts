import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from 'projects/fitatu/src/app/shared/models/recipe.model';
import { User } from 'projects/fitatu/src/app/shared/models/user.model';
import { forkJoin, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { UserFacade } from '../../../user/store/user.facade';
import { RecipesFacade } from '../../store/recipes.facade';

@Component({
  selector: 'app-recipes-menu-container',
  templateUrl: './recipes-menu-container.component.html',
  styleUrls: ['./recipes-menu-container.component.scss'],
})
export class RecipesMenuContainerComponent implements OnInit, OnDestroy {
  recipes: Recipe[] = [];
  selectedRecipe: Recipe;
  destroy$: Subject<boolean> = new Subject<boolean>();
  user: User;

  constructor(
    private recipesFacade: RecipesFacade,
    private userFacade: UserFacade
  ) {}

  ngOnInit(): void {
    this.recipesFacade.loadRecipes();
    this.userFacade.loadUser();
    forkJoin([
      this.recipesFacade.recipes$.pipe(
        tap((recipes: Recipe[]) => {
          this.recipes = recipes;
        })
      ),
      this.userFacade.user$.pipe(
        tap((user: User) => {
          this.user = user;
        })
      ),
    ])
      .pipe(takeUntil(this.destroy$))
      .subscribe();
  }

  addRecipe(recipe: Recipe): void {
    this.recipes.push(recipe);
    this.recipesFacade.saveRecipes(this.recipes);
    this.userFacade.saveUser({
      ...this.user,
      challenges: {
        ...this.user.challenges,
        recipes: this.user.challenges.recipes + 1,
      },
    });
  }

  getRecipeSrc(src: string): void {
    this.recipes.find((recipe: Recipe) => {
      if (recipe.src == src) {
        this.selectedRecipe = recipe;
      }
    });
    this.recipesFacade.selectedRecipe(this.selectedRecipe);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
