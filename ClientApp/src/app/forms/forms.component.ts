import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormArray, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { CustomValidators } from './CustomValidators';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  accountForm: FormGroup | any;
  user: any = {
    fname: "Kevin",
    lname: "David",
    email: "john@scoriait.com",
    phone: "1236549875",
    address: "Russia"
}

constructor() { }

ngOnInit(): void
{
this.accountForm = new FormGroup({
fname: new FormControl('', [Validators.required, Validators.minLength(5)]),
lname: new FormControl('', [Validators.required, Validators.minLength(5)]),
email: new FormControl('', [Validators.required, Validators.email, CustomValidators.validateEmail]),
phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
address: new FormControl('', Validators.required)
})
  
  
} // Closing ngOnInit()


onSubmit() {
/*console.log(this.accountForm);*/           // To log form controls
console.log(this.accountForm.value);         // To log form control values
this.accountForm.reset();                    // To reset the form input values after clicking "Submit" button
}



setForm() // contains setValue() method to set values to form controls
{
  this.accountForm.setValue(this.user);
}

patchForm()
{
this.accountForm.patchValue({ address: "China" })
}

getControl(control: any)  // getter function to get control
{
  return this.accountForm.get(control);
}
getError(control: any)   // getter function to get control and error
{
  return this.accountForm.get(control)?.errors;
}



} // Closing Class
