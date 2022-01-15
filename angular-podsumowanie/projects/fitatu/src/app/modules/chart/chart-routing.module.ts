import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartWeightContainerComponent } from './container/chart-weight-container/chart-weight-container.component';

const routes: Routes = [
  {
    path: '',
    component: ChartWeightContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartRoutingModule {}
