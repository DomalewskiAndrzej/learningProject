import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CreateRoutingModule } from './create-routing.module';
import { CreateMainContainerComponent } from './container/create-main-container/create-main-container.component';
import { CreateMainPresenterComponent } from './presenter/create-main-presenter/create-main-presenter.component';

@NgModule({
  declarations: [CreateMainContainerComponent, CreateMainPresenterComponent],
  imports: [CreateRoutingModule, SharedModule],
})
export class CreateModule {}
