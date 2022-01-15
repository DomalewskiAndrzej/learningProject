import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordsCompareValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    // console.log(control.errors)
    // console.log(control.value.repeatedPassword)
    // console.log(control.value.password)
    return control.value.repeatedPassword === control.value.password
      ? null
      : {
          mustBeSame: true,
        };
  };
}
