import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { IngredientRoutingModule } from './ingredient-routing.module';
import { IngredientFilterContainerComponent } from './container/ingredient-filter-container/ingredient-filter-container.component';
import { IngredientDetailsPresenterComponent } from './presenter/ingredient-details-presenter/ingredient-details-presenter.component';
import { IngredientFilterPresenterComponent } from './presenter/ingredient-filter-presenter/ingredient-filter-presenter.component';
import { IngredientNewingredientPresenterComponent } from './presenter/ingredient-newingredient-presenter/ingredient-newingredient-presenter.component';

@NgModule({
  declarations: [
    IngredientFilterContainerComponent,
    IngredientFilterPresenterComponent,
    IngredientNewingredientPresenterComponent,
    IngredientDetailsPresenterComponent,
  ],
  imports: [IngredientRoutingModule, SharedModule],
})
export class IngredientModule {}
