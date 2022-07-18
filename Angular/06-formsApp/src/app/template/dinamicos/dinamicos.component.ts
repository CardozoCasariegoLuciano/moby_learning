import { Component } from '@angular/core';

interface Iuser {
  nombre: string;
  favoritos: Ifavoritos[];
}

interface Ifavoritos {
  titulo: string;
  id: number;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [],
})
export class DinamicosComponent {
  persona: Iuser = {
    nombre: 'Lucho',
    favoritos: [
      {
        titulo: 'GTA I',
        id: 1,
      },
      {
        titulo: 'GTA II',
        id: 2,
      },
    ],
  };

  newFav: string = ""

  guardar() {
    console.log('Holaa');
  }

  agregarFav() {
    const newFav: Ifavoritos = {
      id: this.persona.favoritos.length + 1,
      titulo: this.newFav,
    }

    this.persona.favoritos.push(newFav)
    this.newFav = ""
  }

  eliminar(index: number) {
   this.persona.favoritos.splice(index, 1)
  }
}
