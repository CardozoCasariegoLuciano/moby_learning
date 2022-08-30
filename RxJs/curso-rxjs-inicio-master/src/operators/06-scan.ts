import { from, map, scan } from "rxjs";

const totalReducer = (acumulador: number, valorActual: number) =>
  acumulador + valorActual;
const numeros = [1, 2, 3, 4, 5];

from(numeros).pipe(scan(totalReducer, 0)).subscribe(console.log);

interface Usuario {
  id?: string;
  autenticado?: boolean;
  token?: string;
  edad?: number;
}

const user: Usuario[] = [
  { id: "fher", autenticado: false, token: null },
  { id: "fher", autenticado: true, token: "ABC" },
  { id: "fher", autenticado: true, token: "ABC123" },
];

const state$ = from(user).pipe(
  scan<Usuario>((acc, cur) => {
    return { ...acc, ...cur };
  })
);

const id$ = state$.pipe(map((state) => state));

id$.subscribe(console.log);


// Es como un reduce 
