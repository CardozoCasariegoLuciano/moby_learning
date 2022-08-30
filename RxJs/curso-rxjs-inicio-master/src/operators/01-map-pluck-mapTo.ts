import { fromEvent, range } from "rxjs";
import { map, mapTo, pluck } from "rxjs/operators";

//range(1, 5)
//.pipe(map<number, number>((num) => num * 3)) //<number, number>  el primero es el tipo del paramtro, el segundo es el type que retorna
//.subscribe(console.log);

const onKeyUp = fromEvent<KeyboardEvent>(document, "keyup").pipe(
  map((prev) => prev.code)
);
onKeyUp.subscribe((ret) => console.log("map: ", ret));

const onKeyUpPlug = fromEvent<KeyboardEvent>(document, "keyup").pipe(
  pluck("target", "baseURI")
);
onKeyUpPlug.subscribe((ret) => console.log("plug: ", ret));


const onKeyUpMapTo = fromEvent<KeyboardEvent>(document, "keyup").pipe(
    mapTo("tecla presionada")
);
onKeyUpMapTo.subscribe((ret) => console.log("MapTo: ", ret))


// Map: el operador map modifica el valor que recibe y lo retorna (afectando así a los operadores siguientes)
// Pluck: si son objetos, retorna solamente la key que le indique, si hay mas valores es porque son sub-keys
// mapTo: transforma la entrada en una salida especifica (no es muy interesante) 
