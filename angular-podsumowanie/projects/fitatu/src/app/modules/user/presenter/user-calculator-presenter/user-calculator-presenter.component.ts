import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from 'projects/fitatu/src/app/shared/services/notification.service';

@Component({
  selector: 'app-user-calculator-presenter',
  templateUrl: './user-calculator-presenter.component.html',
  styleUrls: ['./user-calculator-presenter.component.scss'],
})
export class UserCalculatorPresenterComponent implements OnInit {
  calculationForm: FormGroup;
  pattern = '^0*[1-9][0-9]*(.[0-9]+)?|0+.[0-9]*[1-9][0-9]*$';
  kcal: number;

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.calculationForm = new FormGroup({
      gender: new FormControl(null, [Validators.required]),
      weight: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.pattern),
      ]),
      height: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.pattern),
      ]),
      age: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.pattern),
      ]),
      activity: new FormControl(null, [Validators.required]),
    });
  }

  submitCalculation(): void {
    if (this.calculationForm.valid) {
      if (this.calculationForm.controls.gender.value == 'mezczyzna') {
        const a =
          66.5 +
          13.75 * this.calculationForm.controls.weight.value +
          5.003 * this.calculationForm.controls.height.value -
          6.775 * this.calculationForm.controls.age.value;
        this.kcalCalculation(a);
      } else {
        const a =
          655.1 +
          9.563 * this.calculationForm.controls.weight.value +
          1.85 * this.calculationForm.controls.height.value -
          4.676 * this.calculationForm.controls.age.value;
        this.kcalCalculation(a);
      }
    } else {
      this.notificationService.showError(
        'Uzupełnij formularz poprawnie!',
        'Błąd!'
      );
    }
  }

  kcalCalculation(a: number): void {
    if (this.calculationForm.controls.activity.value == 'Siedzący') {
      this.kcal = a * 1.2;
      this.notificationService.showSuccess('Pomyślnie obliczono.', 'Sukces');
    } else if (
      this.calculationForm.controls.activity.value == 'Lekko aktywny'
    ) {
      this.kcal = a * 1.375;
      this.notificationService.showSuccess('Pomyślnie obliczono.', 'Sukces');
    } else if (
      this.calculationForm.controls.activity.value == 'Umiarkowanie aktywny'
    ) {
      this.kcal = a * 1.55;
      this.notificationService.showSuccess('Pomyślnie obliczono.', 'Sukces');
    } else if (
      this.calculationForm.controls.activity.value == 'Bardzo aktywny'
    ) {
      this.kcal = a * 1.725;
      this.notificationService.showSuccess('Pomyślnie obliczono.', 'Sukces');
    } else if (
      this.calculationForm.controls.activity.value == 'Ekstra aktywny'
    ) {
      this.kcal = a * 1.9;
      this.notificationService.showSuccess('Pomyślnie obliczono.', 'Sukces');
    } else {
      this.notificationService.showError(
        'Uzupełnij formularz poprawnie!',
        'Błąd!'
      );
    }
  }
}
