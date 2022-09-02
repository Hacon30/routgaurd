import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function morningOrEveningRequired():ValidatorFn{
  return (control:AbstractControl):ValidationErrors | null =>{
    return control.value == '-1' ? {morningOrEveningRequired: {value: control.value}}
    : null;
  }
}
