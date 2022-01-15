import { HistoryDetailsPresenterComponent } from './presenter/history-details-presenter/history-details-presenter.component';
import { HistoryDetailsContainerComponent } from './container/history-details-container/history-details-container.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { HistoryRoutingModule } from './history-routing.module';
import { HistoryCalendarContainerComponent } from './container/history-calendar-container/history-calendar-container.component';
import { HistoryCalendarPresenterComponent } from './presenter/history-calendar-presenter/history-calendar-presenter.component';

@NgModule({
  declarations: [
    HistoryDetailsContainerComponent,
    HistoryDetailsPresenterComponent,
    HistoryCalendarContainerComponent,
    HistoryCalendarPresenterComponent,
  ],
  imports: [HistoryRoutingModule, SharedModule],
})
export class HistoryModule {}
