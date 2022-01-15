import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignUp } from 'projects/fitatu/src/app/shared/models/signUp.model';

@Component({
  selector: 'app-auth-login-presenter',
  templateUrl: './auth-login-presenter.component.html',
  styleUrls: ['./auth-login-presenter.component.scss'],
})
export class AuthLoginPresenterComponent implements OnInit {
  @Output() register = new EventEmitter<SignUp>();
  @Output() login = new EventEmitter<SignUp>();
  form: FormGroup;
  hide = true;
  changeFade: boolean = false;

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  change(): void {
    this.changeFade = !this.changeFade;
  }

  onLogin(): void {
    this.login.emit(this.form.value);
    this.form.reset();
  }

  onRegister(signUp: SignUp): void {
    this.register.emit(signUp);
  }
}
