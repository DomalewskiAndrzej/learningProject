import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesDetailsContainerComponent } from './container/recipes-details-container/recipes-details-container.component';
import { RecipesDetailsPresenterComponent } from './presenter/recipes-details-presenter/recipes-details-presenter.component';
import { RecipesMenuContainerComponent } from './container/recipes-menu-container/recipes-menu-container.component';
import { RecipesMenuPresenterComponent } from './presenter/recipes-menu-presenter/recipes-menu-presenter.component';

@NgModule({
  declarations: [
    RecipesDetailsContainerComponent,
    RecipesDetailsPresenterComponent,
    RecipesMenuContainerComponent,
    RecipesMenuPresenterComponent,
  ],
  imports: [RecipesRoutingModule, SharedModule],
})
export class RecipesModule {}
