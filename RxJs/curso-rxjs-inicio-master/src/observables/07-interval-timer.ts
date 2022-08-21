import { interval, timer } from "rxjs";

const observer = {
  next: (val) => console.log("next ", val),
  complete: () => console.log("Completado"),
};

//Son asyncrono por naturaleza
const interval$ = interval(1000);
const timer$ = timer(2000);

//Es como un interval, luego de espererar 2s va a tirar un valor cada 500ms
//const timer$ = timer(2000, 500)

//console.log("Inicio Interval")
//interval$.subscribe(observer)
//console.log("Fin Interval")

console.log("Inicio Timer");
timer$.subscribe(observer);
console.log("Fin Timer");
