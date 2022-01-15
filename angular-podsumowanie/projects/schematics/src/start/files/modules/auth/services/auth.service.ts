import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { Auth } from '../../../shared/models/auth.model';
import { SignUp } from '../../../shared/models/signUp.model';
import { AuthFacade } from '../store/auth.facade';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly endpoints = {
    signUp: '<%= registerLink %>' + environment.APIKey,
    logIn: '<%= loginLink %>' + environment.APIKey,
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
}
