import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'projects/fitatu/src/app/shared/models/user.model';
import { NotificationService } from 'projects/fitatu/src/app/shared/services/notification.service';

@Component({
  selector: 'app-user-menu-presenter',
  templateUrl: './user-menu-presenter.component.html',
  styleUrls: ['./user-menu-presenter.component.scss'],
})
export class UserMenuPresenterComponent implements OnInit {
  @Output() img = new EventEmitter<string>();
  @Output() password = new EventEmitter<string>();
  @Output() kcal = new EventEmitter<number>();
  @Output() nick = new EventEmitter<string>();
  @Output() email = new EventEmitter<string>();
  @Output() userWeight = new EventEmitter<number>();
  @Input() set user(user: User) {
    this._user = user;
  }

  get user(): User {
    return this._user;
  }

  _user: User;
  variable = 0;
  avatarFade = false;
  savedImgSrc: string;

  realKcal: number;
  kcalForm: FormGroup;
  kcalFormFade = false;

  nickForm: FormGroup;
  nickFormFade = false;

  emailForm: FormGroup;
  emailFormFade = false;

  passwordForm: FormGroup;
  passwordFormFade = false;

  userWeightFormFade = false;
  userWeightForm: FormGroup;

  calculatorFade = false;
  pattern = '^0*[1-9][0-9]*(.[0-9]+)?|0+.[0-9]*[1-9][0-9]*$';

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.passwordForm = new FormGroup({
      oldPassword: new FormControl(null, [Validators.required]),
      newPassword: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
      repeatedPassword: new FormControl(null, [Validators.required]),
    });

    this.kcalForm = new FormGroup({
      dailyKcal: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.pattern),
      ]),
      wantedKcal: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.pattern),
      ]),
      option: new FormControl(null, [Validators.required]),
    });

    this.nickForm = new FormGroup({
      nick: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
      ]),
    });

    this.emailForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
    });
    this.userWeightForm = new FormGroup({
      weight: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.pattern),
      ]),
    });
  }

  calculatorFading(): void {
    this.calculatorFade = !this.calculatorFade;
  }

  changeImg(event): void {
    if (this.user.src != event.target.src) {
      this.savedImgSrc = this.user.src;
      this.user.src = event.target.src;
    }
  }

  closeChangeAvatar(): void {
    this.avatarFade = false;
    this.variable = 0;
    if (this.savedImgSrc) {
      this.user.src = this.savedImgSrc;
    }
  }

  changeAvatar(): void {
    this.avatarFade = !this.avatarFade;
    this.variable++;
    if (this.variable % 2 == 0 && this.user.src != this.savedImgSrc) {
      this.notificationService.showSuccess(
        'Udało się zapisać informacje',
        'Sukces'
      );
      this.img.emit(this.user.src);
      this.savedImgSrc = '';
      this.variable = 0;
    }
  }

  calculationRealKcal(): void {
    if (this.kcalForm.controls.option.value == 'przytyć') {
      this.realKcal =
        this.kcalForm.controls.dailyKcal.value +
        this.kcalForm.controls.wantedKcal.value;
    } else {
      this.realKcal =
        this.kcalForm.controls.dailyKcal.value -
        this.kcalForm.controls.wantedKcal.value;
    }
  }

  submitPassword(): void {
    if (
      this.passwordForm.controls.oldPassword.value ==
      this.passwordForm.controls.newPassword.value
    ) {
      this.notificationService.showError(
        'Nowe hasło nie różni się od starego !',
        'Błąd!'
      );
    } else if (this.passwordForm.controls.newPassword.value?.length < 10) {
      this.notificationService.showError(
        'Podane hasło jest za krótkie',
        'Błąd!'
      );
    } else if (
      this.passwordForm.controls.newPassword.value !=
      this.passwordForm.controls.repeatedPassword.value
    ) {
      this.notificationService.showError(
        'Podane nowe hasła różnią się od siebie',
        'Błąd!'
      );
    } else if (
      this.passwordForm.controls.newPassword.value ==
        this.passwordForm.controls.repeatedPassword.value &&
      this.passwordForm.valid
    ) {
      this.notificationService.showSuccess(
        'Udało się zapisać informacje',
        'Sukces'
      );
      this.password.emit(this.passwordForm.controls.newPassword.value);
      this.passwordFormFade = !this.passwordFormFade;
      this.passwordForm.reset();
    } else {
      this.notificationService.showError(
        'Formularz jest wypełniony nieprawidłowo!',
        'Błąd!'
      );
    }
  }

  submitKcal(): void {
    if (
      this.kcalForm.controls.dailyKcal.valid &&
      this.kcalForm.controls.option.value == 'utrzymać' &&
      this.user.dailyKcal != this.kcalForm.controls.dailyKcal.value
    ) {
      this.notificationService.showSuccess(
        'Udało się zapisać informacje',
        'Sukces'
      );
      this.kcal.emit(this.kcalForm.controls.dailyKcal.value);
      this.kcalForm.reset();
      this.kcalFormFade = !this.kcalFormFade;
    } else if (
      this.kcalForm.valid &&
      this.realKcal > 0 &&
      this.user.dailyKcal != this.realKcal
    ) {
      this.notificationService.showSuccess(
        'Udało się zapisać informacje',
        'Sukces'
      );
      this.kcal.emit(this.realKcal);
      this.kcalForm.reset();
      this.kcalFormFade = !this.kcalFormFade;
    } else if (this.user.dailyKcal == this.realKcal) {
      this.notificationService.showError(
        'Dzienne zapotrzebowanie nie rózni się od obecnego!',
        'Błąd!'
      );
    } else if (this.realKcal <= 0) {
      this.notificationService.showError(
        'Dzienne zapotrzebowanie jest mniejsze od/równe 0!',
        'Błąd!'
      );
    } else {
      this.notificationService.showError(
        'Formularz jest wypełniony nieprawidłowo!',
        'Błąd!'
      );
    }
  }

  submitNick(): void {
    if (
      this.nickForm.valid &&
      this.user.nick != this.nickForm.controls.nick.value
    ) {
      this.notificationService.showSuccess(
        'Udało się zapisać informacje',
        'Sukces'
      );
      this.nick.emit(this.nickForm.controls.nick.value);
      this.nickForm.reset();
      this.nickFormFade = !this.nickFormFade;
    } else if (this.user.nick == this.nickForm.controls.nick.value) {
      this.notificationService.showError(
        'Wpisany nick jest taki sam!',
        'Błąd!'
      );
    } else if (this.nickForm.controls.nick.value.length < 5) {
      this.notificationService.showError(
        'Wpisany nick jest za krótki!',
        'Błąd!'
      );
    } else {
      this.notificationService.showError(
        'Formularz jest wypełniony nieprawidłowo!',
        'Błąd!'
      );
    }
  }

  submitEmail(): void {
    if (
      this.emailForm.valid &&
      this.user.email != this.emailForm.controls.email.value
    ) {
      this.notificationService.showSuccess(
        'Udało się zapisać informacje',
        'Sukces'
      );
      this.email.emit(this.emailForm.controls.email.value);
      this.emailForm.reset();
      this.emailFormFade = !this.emailFormFade;
    } else if (this.user.email == this.emailForm.controls.email.value) {
      this.notificationService.showError('Wpisałeś taki sam e-mail!', 'Błąd!');
    } else if (this.emailForm.controls.email.value != null) {
      this.notificationService.showError(
        'Wpisałeś niepoprawny e-mail!',
        'Błąd!'
      );
    } else {
      this.notificationService.showError(
        'Formularz jest wypełniony nieprawidłowo!',
        'Błąd!'
      );
    }
  }

  submitUserWeight(): void {
    if (this.userWeightForm.valid) {
      this.notificationService.showSuccess(
        'Udało się zapisać informacje',
        'Sukces'
      );
      this.userWeight.emit(this.userWeightForm.controls.weight.value);
      this.userWeightForm.reset();
      this.userWeightFormFade = !this.userWeightFormFade;
    } else {
      this.notificationService.showError(
        'Formularz jest wypełniony nieprawidłowo!',
        'Błąd!'
      );
    }
  }

  togglePasswordForm(): void {
    this.passwordFormFade = !this.passwordFormFade;
    this.kcalFormFade = false;
    this.nickFormFade = false;
    this.emailFormFade = false;
    this.userWeightFormFade = false;
  }

  toggleKcalForm(): void {
    this.kcalFormFade = !this.kcalFormFade;
    this.emailFormFade = false;
    this.nickFormFade = false;
    this.passwordFormFade = false;
    this.userWeightFormFade = false;
  }

  toggleNickForm(): void {
    this.nickFormFade = !this.nickFormFade;
    this.emailFormFade = false;
    this.kcalFormFade = false;
    this.passwordFormFade = false;
    this.userWeightFormFade = false;
  }

  toggleEmailForm(): void {
    this.emailFormFade = !this.emailFormFade;
    this.kcalFormFade = false;
    this.nickFormFade = false;
    this.passwordFormFade = false;
    this.userWeightFormFade = false;
  }

  toggleWeightForm(): void {
    this.userWeightFormFade = !this.userWeightFormFade;
    this.emailFormFade = false;
    this.kcalFormFade = false;
    this.nickFormFade = false;
    this.passwordFormFade = false;
  }
}
