import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [],
})
export class DinamicosComponent {
  miFormulario: FormGroup = this.fb.group({
    nombre: [null, [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array(
      [
        ['GTA 1', Validators.required],
        ['GTA 2', Validators.required],
      ],
      Validators.required
    ),
  });

  nuevoFavorito: FormControl = this.fb.control('', [Validators.required]);

  constructor(private fb: FormBuilder) {}

  get favoritosArr() {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  agregarFavorito() {
    if (this.nuevoFavorito.invalid) return;

    const newFavControl: FormControl = new FormControl(
      this.nuevoFavorito.value,
      [Validators.required]
    );

    this.favoritosArr.push(newFavControl);
    this.nuevoFavorito.reset();
  }

  isValidField(name: string) {
    return (
      this.miFormulario.controls[name].errors &&
      this.miFormulario.controls[name].touched
    );
  }

  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }

  borrar(index : number){
    this.favoritosArr.removeAt(index)
  }
}
