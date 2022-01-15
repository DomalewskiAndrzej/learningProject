import { FormGroup } from '@angular/forms';

export function passwordsCompareValidator(
  newPassword: string,
  repeatedPassword: string
) {
  return (formGroup: FormGroup) => {
    const newPasswordControl = formGroup.controls[newPassword];
    const repeatedPasswordControl = formGroup.controls[repeatedPassword];
    if (newPasswordControl.value !== repeatedPasswordControl.value) {
      repeatedPasswordControl.setErrors({
        ...repeatedPasswordControl.errors,
        mustBeSame: true,
      });
    }
  };
}
