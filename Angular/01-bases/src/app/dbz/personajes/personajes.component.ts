import { Component } from '@angular/core';
import {Ipersonaje} from '../interfaces/dbg.interfaces';
import {DbzServise} from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {

  constructor(private dbzServise: DbzServise) { }

  get personajes(): Ipersonaje[]{
    return this.dbzServise.getListado
  }
}
