import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../../../shared/models/user.model';
import * as fromApp from '../../../store/app.interface';
import * as userActions from './user-state/user.actions';
import { getSelectedChallenge, getUser } from './user.index';

@Injectable({ providedIn: 'root' })
export class UserFacade {
  user$: Observable<User> = this.store.pipe(select(getUser));
  selectedChallenges$: Observable<string> = this.store.pipe(
    select(getSelectedChallenge)
  );

  constructor(private store: Store<fromApp.AppState>) {}

  saveUser(user: User): void {
    this.store.dispatch(userActions.saveUser({ user: user }));
  }

  loadUser(): void {
    this.store.dispatch(userActions.loadUser());
  }

  firstLogIn(): void {
    this.store.dispatch(userActions.firstLogIn());
  }

  challengesReview(challenges: string): void {
    this.store.dispatch(
      userActions.challengeReview({ challenges: challenges })
    );
  }

  challengeClear(): void {
    this.store.dispatch(userActions.challengeClear());
  }
}
