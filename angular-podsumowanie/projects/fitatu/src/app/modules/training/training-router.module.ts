import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TrainingCreateContainerComponent } from './container/training-create-container/training-create-container.component';
import { TrainingMenuContainerComponent } from './container/training-menu-container/training-menu-container.component';
import { TrainingCustomContainerComponent } from './container/training-custom-container/training-custom-container.component';
import { TrainingPlansContainerComponent } from './container/training-plans-container/training-plans-container.component';

const routes: Routes = [
  {
    path: '',
    component: TrainingMenuContainerComponent,
  },
  {
    path: 'create',
    component: TrainingCreateContainerComponent,
  },
  {
    path: 'custom',
    component: TrainingCustomContainerComponent,
  },
  {
    path: 'plans',
    component: TrainingPlansContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainingRoutingModule {}
