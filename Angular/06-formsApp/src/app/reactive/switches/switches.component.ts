import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [],
})
export class SwitchesComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    genero: [null, [Validators.required]],
    notificaciones: [true, [Validators.required]],
    condiciones: [false, [Validators.requiredTrue]],
  });

  persona = {};
  personaII = {};

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.miFormulario.valueChanges.subscribe(
      (values) =>
        (this.personaII = {
          genero: values.genero,
          notificaciones: values.notificaciones,
        })
    );
  }

  guardar() {
    this.persona = {
      genero: this.miFormulario.controls['genero'].value,
      notificaciones: this.miFormulario.controls['notificaciones'].value,
    };
  }
}
