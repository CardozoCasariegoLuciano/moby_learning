import { Component, OnInit } from '@angular/core';
import { Color, Iheroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [],
})
export class OrdenarComponent implements OnInit {
  inUpper: boolean = true;
  orden: string = ""
  heroes: Iheroe[] = [
    {
      nombre: 'Iron man',
      vuela: true,
      color: Color.ROJO,
    },
    {
      nombre: 'Ant man',
      vuela: false,
      color: Color.ROJO,
    },
    {
      nombre: 'Falcon',
      vuela: true,
      color: Color.AZUL,
    },
    {
      nombre: 'Black adam',
      vuela: true,
      color: Color.NEGRO,
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.VERDE,
    },
  ];

  changeCase() {
    this.inUpper = !this.inUpper;
  }

  changeOreder(column: string): void{
    this.orden = column
  }

  constructor() {}

  ngOnInit(): void {}
}
