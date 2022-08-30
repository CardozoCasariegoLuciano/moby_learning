import { fromEvent, interval, skip, takeUntil } from "rxjs";

const boton = document.createElement("button");
boton.innerHTML = "Parrar timer";

document.querySelector("body").append(boton);

const counter = interval(1000);
//const clickBtn = fromEvent(boton, "click");
const clickBtn = fromEvent(boton, "click").pipe(
    skip(1)
)

counter
    .pipe(takeUntil(clickBtn))
    .subscribe({
        next: (val) => console.log("Next", val),
        complete: () => console.log("completado"),
    });


//TakeUltil(OBS$) : requiere por parametro otro observable. ya que takeUntil retorna 
// todos los valores hasta que OBS$ emita un valor, en ese caso se termina la subscripción

//Skip(NUMBER): se salta los primeros NUMBER emisiones
