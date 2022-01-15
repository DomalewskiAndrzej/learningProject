import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/fitatu/src/environments/environment';
import { Observable } from 'rxjs';
import { take, exhaustMap } from 'rxjs/operators';
import { Auth } from '../../../shared/models/auth.model';
import { SignUp } from '../../../shared/models/signUp.model';
import { AuthFacade } from '../store/auth.facade';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly endpoints = {
    signUp:
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' +
      environment.firebaseAPIKey,
    logIn:
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
      environment.firebaseAPIKey,
    resetPassword:
      'https://identitytoolkit.googleapis.com/v1/accounts:update?key=' +
      environment.firebaseAPIKey,
  };
  constructor(private http: HttpClient, private authFacade: AuthFacade) {}

  signUp(signUp: SignUp): Observable<Auth> {
    return this.http.post<Auth>(this.endpoints.signUp, {
      ...signUp,
      returnSecureToken: true,
    });
  }

  logIn(signUp: SignUp): Observable<Auth> {
    return this.http.post<Auth>(this.endpoints.logIn, {
      ...signUp,
      returnSecureToken: true,
    });
  }

  resetPassword(password: string): Observable<Auth> {
    return this.authFacade.auth$.pipe(
      take(1),
      exhaustMap((auth: Auth) => {
        const reset = {
          idToken: auth.localId,
          password,
          returnSecureToken: true,
        };
        return this.http.post<Auth>(this.endpoints.resetPassword, reset, {
          params: new HttpParams().set('auth', auth?.idToken),
        });
      })
    );
  }
}
