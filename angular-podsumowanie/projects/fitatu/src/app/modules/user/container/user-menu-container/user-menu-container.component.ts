import { Component, OnDestroy, OnInit } from '@angular/core';
import * as moment from 'moment';
import { User } from 'projects/fitatu/src/app/shared/models/user.model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthFacade } from '../../../auth/store/auth.facade';
import { UserFacade } from '../../store/user.facade';

@Component({
  selector: 'app-user-menu-container',
  templateUrl: './user-menu-container.component.html',
  styleUrls: ['./user-menu-container.component.scss'],
})
export class UserMenuContainerComponent implements OnInit, OnDestroy {
  user: User = {};
  chartDate: string[] = [];
  chartWeight: number[] = [];
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private userFacade: UserFacade, private authFacade: AuthFacade) {}

  ngOnInit(): void {
    this.userFacade.loadUser();
    this.userFacade.user$.pipe(takeUntil(this.destroy$)).subscribe((user) => {
      if (user) {
        this.user = {
          nick: user.nick,
          email: user.email,
          dailyKcal: user.dailyKcal,
          src: user.src,
          weightChart: user.weightChart,
          dayDate: user.dayDate,
          dayNumber: user.dayNumber,
          challenges: user.challenges,
        };
        if (user.weightChart) {
          this.chartDate = user.weightChart?.date;
          this.chartWeight = user.weightChart?.userWeight;
        }
      }
    });
  }

  changeImg(src: string): void {
    this.userFacade.saveUser({ ...this.user, src: src });
  }

  submitPassword(password: string): void {
    this.authFacade.resetPassword(password);
  }

  submitEmail(email: string): void {
    this.userFacade.saveUser({ ...this.user, email: email });
  }

  submitNick(nick: string): void {
    this.userFacade.saveUser({ ...this.user, nick: nick });
  }

  submitKcal(kcal: number): void {
    this.userFacade.saveUser({
      ...this.user,
      dailyKcal: kcal,
      firstLogIn: false,
    });
  }

  submitUserWeight(userWeight: number): void {
    this.chartWeight = [...this.chartWeight];
    this.chartDate = [...this.chartDate];
    this.chartWeight.push(userWeight);
    this.chartDate.push(moment(new Date()).locale('pl').format('D MMMM YYYY'));
    this.userFacade.saveUser({
      ...this.user,
      weightChart: {
        userWeight: this.chartWeight,
        date: this.chartDate,
      },
      challenges: {
        ...this.user.challenges,
        weight: this.user.challenges.weight + 1,
      },
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
