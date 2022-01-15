import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Day } from 'projects/fitatu/src/app/shared/models/day.model';

@Component({
  selector: 'app-history-details-presenter',
  templateUrl: './history-details-presenter.component.html',
  styleUrls: ['./history-details-presenter.component.scss'],
})
export class HistoryDetailsPresenterComponent implements OnInit {
  @Input() dayReview: Day[];
  @Output() return = new EventEmitter<void>();
  hours: number[] = [];
  minutes: number[] = [];
  displayedColumns: string[] = ['name', 'amount', 'b', 't', 'w', 'kcal'];
  message = '';

  ngOnInit(): void {
    if (this.dayReview.length == 0) {
      this.message = 'Wybierz dzień z kalendarza !';
    } else {
      this.message = '';
    }
    this.dayReview.forEach((day: Day) => {
      this.hours.push(+day.date.match(/\d+/g)[3]);
      this.minutes.push(+day.date.match(/\d+/g)[4]);
    });
  }

  back(): void {
    this.return.emit();
  }
}
