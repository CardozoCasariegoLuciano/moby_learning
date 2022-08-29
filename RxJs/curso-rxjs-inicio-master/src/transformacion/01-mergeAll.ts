import { debounceTime, fromEvent, map, mergeAll, pluck } from "rxjs";
import { ajax } from "rxjs/ajax";

const body = document.querySelector("body");
const input = document.createElement("input");
body.append(input);

const input$ = fromEvent<KeyboardEvent>(input, "keyup");

input$
  .pipe(
    debounceTime(500),
    pluck("target", "value"),
    map((name) => {
      return ajax.getJSON(`https://api.github.com/search/users?q=${name}`); // Aca se retorna un nuevo observer
    }),
    mergeAll(),
    pluck("items")
  )
  .subscribe(console.log);

//el operador mergeAll es util cuando un obervador retorna otro observador y lo unico que queres es el valor que emite el primer observer
