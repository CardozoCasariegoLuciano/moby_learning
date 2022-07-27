import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent  {

  miFormulario: FormGroup = this.fb.group({
    nombre: ["", [Validators.required]]
  })

  color: string = "red"
  texto: string = "un texto valido"

  constructor(private fb: FormBuilder) { }

  hasError(field : string): boolean{
    return this.miFormulario.get(field)?.invalid || false
  }

  cambiarColor(){
    this.color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
  }

  cambiarTexto(){
    this.texto = Math.random().toString()
  }
}
