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
