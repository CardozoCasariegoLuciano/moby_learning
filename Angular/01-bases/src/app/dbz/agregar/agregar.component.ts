import { Component } from '@angular/core';
import {Ipersonaje} from '../interfaces/dbg.interfaces';
import {DbzServise} from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {

  constructor(private dbzServise: DbzServise) { }

  nuevo: Ipersonaje = {
    nombre: '',
    poder: 0,
  };


  public agregar(): void {
    if (this.nuevo.nombre.trim().length === 0) return;

    this.dbzServise.addNewCharacter(this.nuevo)

    this.nuevo = {
      nombre: '',
      poder: 0,
    };
  }
}
