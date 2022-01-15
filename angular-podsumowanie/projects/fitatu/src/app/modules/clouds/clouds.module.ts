import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CloudsRandomContainerComponent } from './container/clouds-random-container/clouds-random-container.component';
import { CloudsRandomPresenterComponent } from './presenter/clouds-random-presenter/clouds-random-presenter.component';

@NgModule({
  declarations: [
    CloudsRandomContainerComponent,
    CloudsRandomPresenterComponent,
  ],
  imports: [SharedModule],
  exports: [CloudsRandomContainerComponent, CloudsRandomPresenterComponent],
})
export class CloudsModule {}
