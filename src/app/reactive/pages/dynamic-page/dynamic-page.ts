import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-dynamic-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './dynamic-page.html'
})
export class DynamicPage {

  private formBuilder = inject(FormBuilder);

  myForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.formBuilder.array(
      [
        ['Crash Bash', Validators.required],
        ['Super Smash Bros.', Validators.required]
      ],
      Validators.minLength(3)
    )
  });

  get favoriteGames() {
    return this.myForm.get('favoriteGames') as FormArray;
  }

}
