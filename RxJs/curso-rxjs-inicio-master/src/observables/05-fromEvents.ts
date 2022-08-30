import { fromEvent } from "rxjs";

//Eventos del DOM
const obs1 = fromEvent<MouseEvent>(document, "click");
const obs2 = fromEvent<KeyboardEvent>(document, "keyup");

const observer = {
  next: (val) => console.log("next", val),
};

obs1.subscribe(observer);
obs2.subscribe(observer);

// El fromEvent crea eventos a partir de acciones en elementos del DOM (click, scroll, keyup)
