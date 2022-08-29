import {
  exhaustMap,
  fromEvent,
  interval,
  take,
} from "rxjs";

const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, "click");

click$.pipe(exhaustMap(() => interval$)).subscribe((val) => console.log("ConcatMap: ", val)); 

// El exhaustMap es un operador de aplanamiento (retorna el valor de la suscripción que recibe como parámetro)
// y lo que hace es ignorar todas las subscripciones mientras tenga una activa

// En el caso puntual del ejemplo de arriva, por mas clicks que haga no se inician nuevos intervalos hasta que
// el anterior haya emitido 3 numeros (por el take(3))
