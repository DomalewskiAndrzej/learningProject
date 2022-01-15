import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../../../shared/models/user.model';
import * as fromApp from '../../../store/app.interface';
import * as userActions from './user-state/user.actions';
import { getUser } from './user.index';

@Injectable({ providedIn: 'root' })
export class UserFacade {
  user$: Observable<User> = this.store.pipe(select(getUser));

  constructor(private store: Store<fromApp.AppState>) {}

  saveUser(user: User): void {
    this.store.dispatch(userActions.saveUser({ user: user }));
  }

  loadUser(): void {
    this.store.dispatch(userActions.loadUser());
  }
}
