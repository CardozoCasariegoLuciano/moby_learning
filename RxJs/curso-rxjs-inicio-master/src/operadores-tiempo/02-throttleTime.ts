import {
  asyncScheduler,
  distinctUntilChanged,
  fromEvent,
  pluck,
  throttleTime,
} from "rxjs";

//const clicks = fromEvent<MouseEvent>(document, "click");
//clicks.pipe(throttleTime(1000)).subscribe(console.log);

const input = document.createElement("input");
document.querySelector("body").append(input);

const input$ = fromEvent<KeyboardEvent>(input, "keyup");

input$
  .pipe(
    throttleTime(1000, asyncScheduler, {
      leading: true,
      trailing: true,
    }),
    pluck("target", "value"),
    distinctUntilChanged()
  )
  .subscribe(console.log);


  // ThrottleTime(MILISECONS): ignora los siguientes valores emitidos durante MILISECONS

  //Ejemplo throttleTime(1000):
  // Luego de emititr un valor, durante los siguientes 1000ms (1segundo) todos los
  // valores que se emitan seran ignorados, luego del segundo, queda atento al proximo
  // valor para dejarlo pasar y repetir el proceso
