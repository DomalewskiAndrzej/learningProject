import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MealsDetailsContainerComponent } from './container/meals-details-container/meals-details-container.component';

const routes: Routes = [
  {
    path: '',
    component: MealsDetailsContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MealsRoutingModule {}
