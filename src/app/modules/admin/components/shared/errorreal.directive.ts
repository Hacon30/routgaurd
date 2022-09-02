import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
// @Directive({
//   selector: '[appErrorreal]'
// })
export function ErrorrealDirective() {
  return (control:AbstractControl):ValidationErrors | null =>{
    return control.value == '-1' ? {morningOrEveningRequired: {value: control.value}}
    : null;
  }
}
