import {interval, merge, take} from "rxjs";

const interval$ = interval(1000)

merge(
    interval$.pipe(take(3)),
    interval$.pipe(take(1)),
    interval$.pipe(take(4)),
).subscribe(console.log)

//El Operador merge esta deprecado, esto es el metodo merge

//Merge(OBS1$, OBS2$ ...): es una funcion que recibe por parametros unos
//observables, en el caso de que me subscriva, va a ir "ejecutandolos"
// todos juntos al mismo timepo
