import { TrainingAddPresenterComponent } from './presenter/training-add-presenter/training-add-presenter.component';
import { TrainingMenuPresenterComponent } from './presenter/training-menu-presenter/training-menu-presenter.component';
import { TrainingMenuContainerComponent } from './container/training-menu-container/training-menu-container.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { TrainingRoutingModule } from './training-router.module';
import { TrainingCreateContainerComponent } from './container/training-create-container/training-create-container.component';
import { TrainingCreatePresenterComponent } from './presenter/training-create-presenter/training-create-presenter.component';
import { TrainingCustomContainerComponent } from './container/training-custom-container/training-custom-container.component';
import { TrainingCustomPresenterComponent } from './presenter/training-custom-presenter/training-custom-presenter.component';
import { TrainingPlansContainerComponent } from './container/training-plans-container/training-plans-container.component';

@NgModule({
  declarations: [
    TrainingCreateContainerComponent,
    TrainingCreatePresenterComponent,
    TrainingMenuContainerComponent,
    TrainingMenuPresenterComponent,
    TrainingAddPresenterComponent,
    TrainingCustomContainerComponent,
    TrainingCustomPresenterComponent,
    TrainingPlansContainerComponent,
  ],
  imports: [TrainingRoutingModule, SharedModule],
})
export class TrainingModule {}
