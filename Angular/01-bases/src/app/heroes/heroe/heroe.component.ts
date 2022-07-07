import { Component } from "@angular/core";

@Component({
  selector : "app-heroe",
  templateUrl : "./heroe.component.html",
})

export class HeroeComponent {
  nombre: string = "IronMan"
  edad: number = 45

  get nombreUpperCase() :string{
    return this.nombre.toUpperCase()
  }

  obtenerNombre(): string{
    return `${this.nombre} - ${this.edad}`
  }

  cambiarNombre(newName: string): void{
    this.nombre = newName
  }

  cambiarEdad(newAge: number): void{
    this.edad = newAge
  }


}
