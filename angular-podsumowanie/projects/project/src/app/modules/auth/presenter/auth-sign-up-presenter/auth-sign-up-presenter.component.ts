import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { passwordsCompareValidator } from 'projects/project/src/app/shared/validators/passwordValidate';
import { SignUp } from 'projects/schematics/src/start/files/shared/models/signUp.model';

@Component({
  selector: 'app-auth-sign-up-presenter',
  templateUrl: './auth-sign-up-presenter.component.html',
  styleUrls: ['./auth-sign-up-presenter.component.scss'],
})
export class AuthSignUpPresenterComponent implements OnInit {
  @Output() changeFade = new EventEmitter<void>();
  @Output() register = new EventEmitter<SignUp>();
  form: FormGroup;
  hidePassword = true;
  hideRepeatedPassword = true;

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
      repeatedPassword: new FormControl(null, [
        Validators.required,
        passwordsCompareValidator(),
      ]),
    });
  }

  change(): void {
    this.changeFade.emit();
  }

  onRegister(): void {
    console.log(this.form);
    if (this.form.valid) {
      this.register.emit(this.form.value);
      this.form.reset();
    }
  }
}
