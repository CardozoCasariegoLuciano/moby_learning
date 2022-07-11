import { Pipe, PipeTransform } from '@angular/core';
import {Iheroe} from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroes: Iheroe[], orden: string = ""): Iheroe[] {

    let sorted: Iheroe[] = []

    switch (orden) {
      case "nombre":
        sorted = heroes.sort( (a,b) => a.nombre > b.nombre ? 1 : -1)
        break;

      case "vuela":
        sorted = heroes.sort( (a,b) => a.vuela > b.vuela ? -1 : 1)
        break;

      case "color":
        sorted = heroes.sort( (a,b) => a.color > b.color ? 1 : -1)
        break;

      default:
        sorted = heroes
        break;
    }

    return sorted
  }

}
