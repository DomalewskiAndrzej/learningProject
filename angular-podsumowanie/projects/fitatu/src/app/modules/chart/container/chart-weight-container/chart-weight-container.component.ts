import { Component, OnInit } from '@angular/core';
import { User } from 'projects/fitatu/src/app/shared/models/user.model';
import { WeightChart } from 'projects/fitatu/src/app/shared/models/weightChart.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserFacade } from '../../../user/store/user.facade';

@Component({
  selector: 'app-chart-weight-container',
  templateUrl: './chart-weight-container.component.html',
  styleUrls: ['./chart-weight-container.component.scss'],
})
export class ChartWeightContainerComponent implements OnInit {
  weightChart: Observable<WeightChart> = this.userFacade.user$.pipe(
    map((user: User) => {
      return user?.weightChart;
    })
  );
  constructor(private userFacade: UserFacade) {}

  ngOnInit(): void {
    this.userFacade.loadUser();
  }
}
