import {Component} from "@angular/core"

@Component({
  selector: "app-contador",
  template: `
            <h1>{{titulo}}</h1>

            <button (click)=" acumular(+1)"> +1 </button>
            <span>{{numero}}</span>
            <button (click)=" acumular(-1) ">-1</button>
            ` 
})
export class ContadorComponent {
  titulo: string = 'Contador App';
  numero: number = 0;

  public acumular(num: number): void {
    this.numero += num;
  }
}
