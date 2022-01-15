import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { User } from 'projects/fitatu/src/app/shared/models/user.model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UserFacade } from '../../../user/store/user.facade';

@Component({
  selector: 'app-mainpage-menu-container',
  templateUrl: './mainpage-menu-container.component.html',
  styleUrls: ['./mainpage-menu-container.component.scss'],
})
export class MainpageMenuContainerComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  dayDate: string = moment(new Date()).locale('pl').format('D MM YYYY, HH:mm');
  dayNumber: number;
  user: User;

  constructor(private userFacade: UserFacade, private router: Router) {}

  ngOnInit(): void {
    this.userFacade.loadUser();
    this.userFacade.user$.pipe(takeUntil(this.destroy$)).subscribe((user) => {
      if (user) {
        this.user = {
          ...user,
          dayNumber: user.dayNumber + 1,
          dayDate: this.dayDate,
        };
      }
    });
  }

  createDay(): void {
    this.userFacade.saveUser(this.user);
    setTimeout(() => {
      this.router.navigate(['/meal']);
    }, 1500);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
