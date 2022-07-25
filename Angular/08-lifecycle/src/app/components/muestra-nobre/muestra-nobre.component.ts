import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-muestra-nobre',
  templateUrl: './muestra-nobre.component.html',
  styles: [
  ]
})
export class MuestraNobreComponent implements OnInit, OnChanges {

  @Input("prop") nombre!: string 

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
  }

}
