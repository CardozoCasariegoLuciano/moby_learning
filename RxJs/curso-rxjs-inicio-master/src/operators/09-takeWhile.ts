import { fromEvent, map, takeWhile } from "rxjs";

const click = fromEvent<MouseEvent>(document, "click");

click
  .pipe(
      map(({x, y}) => ({x, y})),
      takeWhile(({y}) => y <= 150, true)
  )
  .subscribe({
    next: (val) => console.log("value", val),
    complete: () => console.log("Terminado"),
  });



  //TakeWhile(CONDITION) : Similar al Firts, pero este no solo toma al primero,
  // emite todos los valores mientras se cumpla la CONDITION, si alguno no la 
  // cumple, se completa la subscripción
