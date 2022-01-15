import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesDetailsContainerComponent } from './container/recipes-details-container/recipes-details-container.component';
import { RecipesMenuContainerComponent } from './container/recipes-menu-container/recipes-menu-container.component';

const routes: Routes = [
  {
    path: '',
    component: RecipesMenuContainerComponent,
  },
  { path: 'details', component: RecipesDetailsContainerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipesRoutingModule {}
