import { Component } from '@angular/core';
import { SignUp } from 'projects/fitatu/src/app/shared/models/signUp.model';
import { Observable } from 'rxjs';
import { AuthFacade } from '../../store/auth.facade';

@Component({
  selector: 'app-auth-login-container',
  templateUrl: './auth-login-container.component.html',
  styleUrls: ['./auth-login-container.component.scss'],
})
export class AuthLoginContainerComponent {
  errorMessage$: Observable<string> = this.authFacade.getError$;

  constructor(private authFacade: AuthFacade) {}

  submitLogin(signUp: SignUp): void {
    this.authFacade.logIn({ ...signUp });
  }

  submitSignup(signUp: SignUp): void {
    this.authFacade.signUp({ ...signUp });
  }
}
