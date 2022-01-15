import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Day } from 'projects/fitatu/src/app/shared/models/day.model';
import { Observable, Subject } from 'rxjs';
import { HistoryFacade } from '../../store/history.facade';

@Component({
  selector: 'app-history-details-container',
  templateUrl: './history-details-container.component.html',
  styleUrls: ['./history-details-container.component.scss'],
})
export class HistoryDetailsContainerComponent {
  dayReview$: Observable<Day[]> = this.historyFacade.dayReview$;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private historyFacade: HistoryFacade, private router: Router) {}

  return(): void {
    this.router.navigate(['/history']);
  }
}
