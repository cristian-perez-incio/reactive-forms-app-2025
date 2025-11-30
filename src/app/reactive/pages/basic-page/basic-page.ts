import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-basic-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './basic-page.html'
})
export class BasicPage {

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

  isValidField(fieldName: string): boolean | null {
    return !this.myForm.controls[fieldName].errors;
  }

  getFieldErrorMsg(fieldName: string): string | null {
    if (!this.myForm.controls[fieldName]) {
      return null;
    }

    const errors = this.myForm.controls[fieldName].errors ?? {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es obligatorio';
        case 'minlength':
          return `Ingrese por lo menos ${errors[key].requiredLength} caracteres`;
        case 'min':
          return `Ingrese un valor igual o mayor a ${errors[key].min}`;
      }
    }

    return null;
  }

}
