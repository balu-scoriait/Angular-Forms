import { AbstractControl } from '@angular/forms';

export class CustomValidators
{
static validateEmail(control: AbstractControl): { [key: string]: any } | null {
const email: string = control.value;
const domain = email != null ? email.substring(email.lastIndexOf('@') + 1) : '';
  return (email === '' || domain.toLocaleLowerCase() === 'scoriait.com') ? null : { 'validateEmail': true }
}
}



// $$$$$$$$$$$$$$$$$$$$$$$$ Methods $$$$$$$$$$$$$$$$$$$$$$$$$$$$
/*
return (email === '' || domain.toLocaleLowerCase() === 'scoriait.com') ? null : { 'validateEmail': true }
*/
/*if (email === '' || domain.toLocaleLowerCase() === 'scoriait.com') {
  return null; // return null ( Line 5)
}
else {
return { 'validateEmail': true }; // return { [key: string]: any } ( Line 5)
}*/
