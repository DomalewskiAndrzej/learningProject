import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { DatabaseRoutingModule } from './database-routing';
import { DetailsPresenterComponent } from '../database/presenter/details-presenter.component';
import { DetailsContainerComponent } from '../database/container/details-container.component';

@NgModule({
  declarations: [DetailsPresenterComponent, DetailsContainerComponent],
  imports: [DatabaseRoutingModule, SharedModule],
})
export class DatabaseModule {}
