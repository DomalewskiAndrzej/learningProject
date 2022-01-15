import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { IngredientFilterContainerComponent } from './container/ingredient-filter-container/ingredient-filter-container.component';

const routes: Routes = [
  {
    path: '',
    component: IngredientFilterContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngredientRoutingModule {}
