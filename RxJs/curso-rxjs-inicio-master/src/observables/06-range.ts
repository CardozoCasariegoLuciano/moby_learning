import {range} from "rxjs";

const range$ = range(1,5) 
// inicia en la posición 1 y retorna los siguientes 5
// NO retorna los números entre e 1 y el 5

range$.subscribe(console.log)

