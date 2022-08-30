import {concat, interval, take} from "rxjs";

const interval$ = interval(1000)

concat(
    interval$.pipe(take(3)),
    interval$.pipe(take(1)),
    interval$.pipe(take(4)),
).subscribe(console.log)

//El Operador concat esta deprecado, esto es la funcion concat

//Concat(OBS1$, OBS2$ ...): es una funcion que recibe por parametros unos
//observables, en el caso de que me subscriva, va a ir "ejecutandolos"
// en orden, si uno de los OBS$ nunca termina, no se puede ejecutar el siguiente
