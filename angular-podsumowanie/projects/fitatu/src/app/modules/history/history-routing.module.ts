import { HistoryDetailsContainerComponent } from './container/history-details-container/history-details-container.component';
import { HistoryCalendarContainerComponent } from './container/history-calendar-container/history-calendar-container.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HistoryCalendarContainerComponent,
  },
  {
    path: 'details',
    component: HistoryDetailsContainerComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryRoutingModule {}
