import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { FormUtils } from '../../../utils/form-utils';

@Component({
  selector: 'reactive-basic-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './basic-page.html'
})
export class BasicPage {

  formUtils = FormUtils;
  private formBuilder = inject(FormBuilder);

  myForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(10)]],
    stockLevel: [0, [Validators.required, Validators.min(0)]]
  });

  /*myForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(0),
    stockLevel: new FormControl(0),
  });*/

  onSubmit() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    this.myForm.reset({
      price: 0,
      stockLevel: 0
    });
  }

}
