import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { SignUp } from 'projects/fitatu/src/app/shared/models/signUp.model';
import { passwordsCompareValidator } from 'projects/fitatu/src/app/shared/validators/passwordValidate';

@Component({
  selector: 'app-auth-sign-up-presenter',
  templateUrl: './auth-sign-up-presenter.component.html',
  styleUrls: ['./auth-sign-up-presenter.component.scss'],
})
export class AuthSignUpPresenterComponent implements OnInit {
  @Output() signup = new EventEmitter<SignUp>();
  errorMessage: string;
  signupForm: FormGroup;
  signupFormFade = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group(
      {
        email: new FormControl(null, [Validators.required, Validators.email]),
        newPassword: new FormControl(null, [
          Validators.required,
          Validators.minLength(10),
        ]),
        repeatedPassword: new FormControl(null, [Validators.required]),
      },
      {
        validators: [
          passwordsCompareValidator('newPassword', 'repeatedPassword'),
        ],
      }
    );
  }

  submitSignup(): void {
    if (this.signupForm.valid) {
      this.signup.emit({
        email: this.signupForm.controls.email.value,
        password: this.signupForm.controls.newPassword.value,
      });
      this.signupForm.reset();
    }
  }
}
