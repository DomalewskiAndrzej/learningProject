import { Component, Input, EventEmitter, Output } from '@angular/core';
import * as moment from 'moment';
import { User } from 'projects/fitatu/src/app/shared/models/user.model';

@Component({
  selector: 'app-mainpage-menu-presenter',
  templateUrl: './mainpage-menu-presenter.component.html',
  styleUrls: ['./mainpage-menu-presenter.component.scss'],
})
export class MainpageMenuPresenterComponent {
  @Input() user: User;
  @Output() createDay = new EventEmitter<void>();

  dayDate: string = moment(new Date())
    .locale('pl')
    .format('D MMMM YYYY, HH:mm');
  meal = false;
  variable = 0;

  onCreateDay(): void {
    this.meal = true;
    this.variable++;
    if (this.variable == 2) {
      this.createDay.emit();
      this.variable = 0;
    }
  }
}
