import { FormGroup } from "@angular/forms";

export class FormUtils {

  static isValidField(form: FormGroup, fieldName: string): boolean | null {
    return !form.controls[fieldName].errors || !form.controls[fieldName].touched;
  }

  static getFieldErrorMsg(form: FormGroup, fieldName: string): string | null {
    if (!form.controls[fieldName]) {
      return null;
    }

    const errors = form.controls[fieldName].errors ?? {};

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
