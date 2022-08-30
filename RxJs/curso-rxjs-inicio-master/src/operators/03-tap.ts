import { range, tap } from "rxjs";

const numbers$ = range(1, 5);
numbers$
  .pipe(tap((val) => console.log("tap:", val)))
  .subscribe((val) => console.log("sub: ", val));

// Tap: no modifica los valores que pasan por el, util para ejecutar metodos y funciones 
