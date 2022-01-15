import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CustomRoutingModule } from './custom-routing.module';
import { CustomHomeContainerComponent } from './container/custom-home-container/custom-home-container.component';
import { CustomHomePresenterComponent } from './presenter/custom-home-presenter/custom-home-presenter.component';

@NgModule({
  declarations: [CustomHomeContainerComponent, CustomHomePresenterComponent],
  imports: [CustomRoutingModule, SharedModule],
})
export class CustomModule {}
