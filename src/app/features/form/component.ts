import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators, ValidatorFn, FormBuilder } from '@angular/forms';

@Component({
  selector: 'SarhanForm',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class SarhanFormComponent {
  public isSubmitted = false;
  public sarhanForm: FormGroup = null;

  public contactTypes: { value: string, title: string, validators?: ValidatorFn[] }[] = [
    { value: 'phone', title: 'Phone', validators: [Validators.required] },
    { value: 'e-mail', title: 'E-mail', validators: [Validators.email, Validators.required] },
    { value: 'skype', title: 'Skype', validators: [Validators.required] }
  ];

  constructor(private fb: FormBuilder) {
    this.sarhanForm = fb.group({
      sarhanInput: ['', [Validators.required]],
      sarhanAddress: fb.group({
        sarhanCountry: [''],
        sarhanCity: ['']
      }),
      sarhanContacts: fb.array([
        fb.group({
          type: [this.contactTypes[0].value],
          value: ['066 141 01 17']
        }),
        fb.group({
          type: [this.contactTypes[0].value],
          value: ['066 141 01 88']
        })
      ])
    });
    this.sarhanForm.valueChanges.subscribe(val => {
      console.log('==>', { form: this.sarhanForm, val });
    });
  }

  public addContact() {
    (this.sarhanForm.get('sarhanContacts') as FormArray).push(new FormGroup({
      type: new FormControl(this.contactTypes[0].value, [Validators.required]),
      value: new FormControl('', [Validators.required])
    }));
  }

  public removeContact(idx) {
    (this.sarhanForm.get('sarhanContacts') as FormArray).removeAt(idx);
  }

  public submit($event, sarhanForm) {
    this.isSubmitted = true;
    console.log('==>onSubmit', $event, sarhanForm);
  }
}
