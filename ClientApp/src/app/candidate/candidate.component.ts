import { DOCUMENT } from '@angular/common';
import { Component, OnInit, ViewEncapsulation, OnDestroy, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormArray, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CandidateComponent implements OnInit, OnDestroy {

candidateForm: FormGroup | any;
  constructor(private fb: FormBuilder, @Inject(DOCUMENT) private _document : any)
{
this.candidateForm = this.fb.group({
fname: "",
lname: "",
email: "",
language: this.fb.array([])
});
}

get languages(): FormArray
{
return this.candidateForm.get("language") as FormArray
}

newLang(): FormGroup {
return this.fb.group({
lang: '',
prof: '',
})
}

addLangs() {
this.languages.push(this.newLang());
}
  
  onSubmit() {
    console.log(this.candidateForm.value);
    this.candidateForm.reset();
  }
  ngOnInit(): void {
    this._document.body.classList.add('body');
  }
  ngOnDestroy() {
    // remove the class form body tag
    this._document.body.classList.add('body');
  }

}
