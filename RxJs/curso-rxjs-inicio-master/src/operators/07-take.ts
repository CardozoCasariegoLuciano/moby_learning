import { of, take } from "rxjs";

const numeros = of(1, 2, 3, 4, 5);

numeros
.pipe(take(2))
.subscribe({
  next: (val) => console.log("next: ", val),
  complete: () => console.log("complete"),
});

// Take(N): termina la subscripción luego de dejar pasar N emisiones
