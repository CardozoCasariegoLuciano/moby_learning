import { endWith, of, startWith } from "rxjs";

const numeros = of(1, 2, 3)
    .pipe(
        startWith(0),
        endWith("a", "b", "c")
    );

numeros.subscribe(console.log);

// StartWith: hace tal cual lo que dice el nombre, el valor que le paso por
// parámetro se envía antes del primer valor de la subscripción

// EndWith: hace tal cual lo que dice el nombre, el valor que le paso por
// parámetro se envía despues del valor de la subscripción

