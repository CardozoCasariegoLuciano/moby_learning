import { Component, OnInit } from '@angular/core';
import {interval} from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent implements OnInit {
  //i18nSelect
  nombre: string = 'Laura';
  genero: string = 'femenino';

  generosMapping = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  //i18nPlural
  clientes: string[] = ["Lucas", "Ivan", "Laura"];
  clientesMapping = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos a un cliente esperando',
    other: 'tenemos a # clientes esperando',
  };

  cambiarNombre(): void {
    if (this.genero === 'masculino') {
      this.nombre = 'Laura';
      this.genero = 'femenino';
    } else {
      this.nombre = 'Marcelo';
      this.genero = 'masculino';
    }
  }

  agregarCliente() {
    this.clientes.push('##');
  }

  quitarCliente() {
    this.clientes.pop();
  }


  //KeyValue
  persona = {
    nombre: "Geronimo",
    edad: 98,
    hijos:["Renata"]
  }

  //Async pipe
  miObservable = interval(2000)

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve( "Tenemos un resultado")
    }, 3500)
  })




  constructor() {}

  ngOnInit(): void {}
}
