import { fromEvent, interval, mergeMap, takeUntil } from "rxjs";

const mouseDown = fromEvent(document, "mousedown");
const moudeUp = fromEvent(document, "mouseup");
const interval$ = interval();

mouseDown
  .pipe(mergeMap(() => interval$.pipe(takeUntil(moudeUp))))
  .subscribe(console.log);

//es un operador de aplanamiento, por lo que no retorna un observable sino que directamente retora su valor
//Este operador es medio parecido al MergeAll si hace falta mirar de vuelta las clases 76 y 78 de Rxjs

