import {Injectable} from "@angular/core";
import {Ipersonaje} from "../interfaces/dbg.interfaces";

@Injectable()
export class DbzServise{

  private _listado: Ipersonaje[] = [
    {
      nombre: 'Batman',
      poder: 4500,
    },
    {
      nombre: 'Flash',
      poder: 3000,
    },
  ];

  get getListado(): Ipersonaje[] {
    return [...this._listado]
  }

  addNewCharacter(arg: Ipersonaje): void {
    this._listado.push(arg);
  }
}
