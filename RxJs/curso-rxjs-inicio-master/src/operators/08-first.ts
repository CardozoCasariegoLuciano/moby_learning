import { first, fromEvent, tap } from "rxjs";

const click = fromEvent<MouseEvent>(document, "click");

click
  .pipe(
    tap(() => console.log("tap")),
    first<MouseEvent>((event) => event.clientY >= 150)
  )
  .subscribe({
    next: (val) => console.log("valor", val),
    complete: () => console.log("terminado"),
  });


  //first(CONDITION) : emite todos los valores hasta que alguno cumple la CONDITION,
  // en ese momento se termina la subscripción (first: toma el  primero que cumpla)
  //  si no pongo nada en la CONDITION solo retorna el primero valor emitido
