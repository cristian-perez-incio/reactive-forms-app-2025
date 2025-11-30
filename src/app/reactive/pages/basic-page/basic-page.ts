import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'reactive-basic-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './basic-page.html'
})
export class BasicPage {

  private formBuilder = inject(FormBuilder);

  myForm = this.formBuilder.group({
    name: [''],
    price: [0],
    stockLevel: [0]
  });

  /*myForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(0),
    stockLevel: new FormControl(0),
  });*/

}
