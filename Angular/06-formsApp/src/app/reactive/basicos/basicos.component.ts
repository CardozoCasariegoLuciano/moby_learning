import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    nombre: [null, [Validators.required, Validators.minLength(3)]],
    precio: [null, [Validators.required, Validators.min(0)]],
    existencias: [null, [Validators.required, Validators.min(0)]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  isValidField(name: string){
    return this.miFormulario.controls[name].errors && this.miFormulario.controls[name].touched
  }

  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched()
      return;
    }

    console.log(this.miFormulario.value);
    this.miFormulario.reset()
  }
}
