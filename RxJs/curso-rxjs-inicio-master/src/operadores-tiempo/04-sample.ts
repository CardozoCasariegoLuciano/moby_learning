import { fromEvent, interval, sample } from "rxjs";

const interval$ = interval(500);
const click$ = fromEvent(document, "click");


interval$.pipe(sample(click$)).subscribe(console.log)


//sample(OBS$) muestra el ultimo valor emitido antes de que OBS$ emita algo:

//en el caso de arriba, el valor del intervalo no se va a mostrar hasta que 
// se haga click, momento en el que se va a mostrar el ultimo valor emitido 
// por el intervalo

