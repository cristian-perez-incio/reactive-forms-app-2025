import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { FormUtils } from '../../../utils/form-utils';

@Component({
  selector: 'reactive-dynamic-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './dynamic-page.html'
})
export class DynamicPage {

  formUtils = FormUtils;
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

  newFavoriteGame = new FormControl('', Validators.required);

  get favoriteGames() {
    return this.myForm.get('favoriteGames') as FormArray;
  }

  onAddToFavoriteGames() {
    if (this.newFavoriteGame.invalid) {
      return;
    }

    const newGame = this.newFavoriteGame.value;

    this.favoriteGames.push(this.formBuilder.control(newGame, Validators.required));

    this.newFavoriteGame.reset();
  }

  onDeleteFromFavoriteGames(index: number) {
    this.favoriteGames.removeAt(index);
  }

  onSubmit() {
    this.myForm.markAllAsTouched();
  }

}
