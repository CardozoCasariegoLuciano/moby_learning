import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{

  public list: string[] = ['Batman', 'Flash', 'Green Arrow']
  public borrados: string[] = []


  public borrarHeroe(): void{
    let brd = this.list.shift()
    brd && this.borrados.push(brd)
  }

}
