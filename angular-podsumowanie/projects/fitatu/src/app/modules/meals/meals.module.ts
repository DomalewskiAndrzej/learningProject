import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { MealsDetailsContainerComponent } from './container/meals-details-container/meals-details-container.component';
import { MealsRoutingModule } from './meals-routing';
import { MealsDetailsPresenterComponent } from './presenter/meals-details-presenter/meals-details-presenter.component';

@NgModule({
  declarations: [
    MealsDetailsContainerComponent,
    MealsDetailsPresenterComponent,
  ],
  imports: [MealsRoutingModule, SharedModule],
})
export class MealsModule {}
