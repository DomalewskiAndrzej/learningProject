import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Auth } from '../../shared/models/auth.model';
import { User } from '../../shared/models/user.model';
import { UserFacade } from '../user/store/user.facade';
import { AuthFacade } from './store/auth.facade';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private authFacade: AuthFacade,
    private userFacade: UserFacade,
    private router: Router
  ) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let a;
    this.userFacade.user$.pipe(
      map((user: User) => {
        return (a = user);
      })
    );
    return this.authFacade.auth$.pipe(
      map((auth: Auth) => {
        if (auth?.idToken && !a) {
          return true;
        } else {
          this.router.navigate(['/auth']);
          return false;
        }
      })
    );
  }
}
