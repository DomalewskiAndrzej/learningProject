import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, first, map } from 'rxjs/operators';
import { User } from '../../shared/models/user.model';
import { UserFacade } from '../user/store/user.facade';

@Injectable({ providedIn: 'root' })
export class AuthMainPageGuard implements CanActivate {
  constructor(private userFacade: UserFacade, private router: Router) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.userFacade.loadUser();
    return this.userFacade.user$.pipe(
      filter((user: User) => !!user),
      first(),
      map((user: User) => {
        if (user?.dayDate) {
          this.router.navigate(['/meal']);
          return false;
        } else {
          return true;
        }
      })
    );
  }
}
