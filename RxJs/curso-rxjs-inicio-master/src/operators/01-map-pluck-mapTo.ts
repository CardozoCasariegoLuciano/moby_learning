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
