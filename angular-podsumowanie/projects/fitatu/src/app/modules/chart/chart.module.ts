import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ChartRoutingModule } from './chart-routing.module';
import { ChartsModule } from 'ng2-charts';
import { ChartWeightPresenterComponent } from './presenter/chart-weight-presenter/chart-weight-presenter.component';
import { ChartWeightContainerComponent } from './container/chart-weight-container/chart-weight-container.component';

@NgModule({
  declarations: [ChartWeightContainerComponent, ChartWeightPresenterComponent],
  imports: [ChartRoutingModule, SharedModule, ChartsModule],
})
export class ChartModule {}
