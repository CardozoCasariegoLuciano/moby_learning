import { fromEvent, pluck, switchMap } from "rxjs";
import { ajax } from "rxjs/ajax";

const body = document.querySelector("body");
const input = document.createElement("input");
body.append(input);

const input$ = fromEvent<KeyboardEvent>(input, "keyup");

const url = "https://httpbin.org/delay/1?arg=";

input$
  .pipe(
    pluck("target", "value"),
    switchMap((name) => {
      return ajax.getJSON(url + name); // Aca se retorna un nuevo observer
    })
  )
  .subscribe(console.log);

//El operador switchMap esta buenardo!!, es similar al mergeAll o mergeMap, pero este solo mantiene la subscripcion del ultimo. Muy util para cancelar peticiones HTTP (cosa que se hace en el codigo de arriba)
