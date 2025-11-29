import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'reactive-basic-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './basic-page.html'
})
export class BasicPage {

  myForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(0),
    stockLevel: new FormControl(0),
  });

}
