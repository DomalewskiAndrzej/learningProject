import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignUp } from 'projects/fitatu/src/app/shared/models/signUp.model';

@Component({
  selector: 'app-auth-login-presenter',
  templateUrl: './auth-login-presenter.component.html',
  styleUrls: ['./auth-login-presenter.component.scss'],
})
export class AuthLoginPresenterComponent implements OnInit {
  @Input() set errorMessage(message: string) {
    this._errorMessage = message;
  }
  get errorMessage(): string {
    return this._errorMessage;
  }
  @Output() login = new EventEmitter<SignUp>();
  @Output() signUp = new EventEmitter<SignUp>();
  _errorMessage: string;
  loginForm: FormGroup;
  signUpFade = false;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  submitLogin(): void {
    if (this.loginForm.valid) {
      this.login.emit({
        ...this.loginForm.value,
      });
    } else {
      this.errorMessage = 'Formularz jest wypełniony nieprawidłowo!';
    }
  }

  signUpFading(): void {
    this.signUpFade = !this.signUpFade;
  }

  submitSignup(signUp: SignUp): void {
    this.signUp.emit(signUp);
  }
}
