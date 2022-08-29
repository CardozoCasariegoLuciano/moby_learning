import {
  concatMap,
  fromEvent,
  interval,
  mergeMap,
  take,
} from "rxjs";

const interval$ = interval(500).pipe(take(4));
const click$ = fromEvent(document, "click");

click$.pipe(concatMap(() => interval$)).subscribe((val) => console.log("ConcatMap: ", val)); // ConcatMap => los ejecuta en orden. uno después de otro
// click$.pipe(mergeMap(() => interval$)).subscribe((val) => console.log("MergueMap: ", val)); // mergueMap => los ejecuta todos al mismo tiempo (ni bien se subscriben)

// El concatMap es un operador de aplanamiento (retorna el valor de la suscripción que recibe como parámetro)
// y lo que hace es poner todas esas subscripciones en una cola de espera, donde solo ejecuta el siguiente
// si el anterior ya termino
