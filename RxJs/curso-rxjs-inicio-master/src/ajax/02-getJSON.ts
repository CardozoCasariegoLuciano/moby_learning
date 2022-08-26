import { ajax } from "rxjs/ajax";

const url = "https://httpbin.org/delay/1";

const obs$ = ajax.getJSON(url, {
  "mi-super-token": "nanana alto token papá",
});

obs$.subscribe(console.log);

//con el metodo getJSON es masomenos lo mismo que el ajax

