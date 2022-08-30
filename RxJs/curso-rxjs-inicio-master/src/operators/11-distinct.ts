import { distinct, from, of } from "rxjs";

const numeros = of(1, 1, 1, 2, 2, 3, 4, 5, 5, 1);

numeros.pipe(distinct()).subscribe({
  next: (val) => console.log("next ", val),
  complete: () => console.log("terminado"),
});

interface Personaje {
  name: string;
}

const personajes: Personaje[] = [
  {
    name: "X",
  },
  {
    name: "Walli",
  },
  {
    name: "Loco",
  },
  {
    name: "Loco",
  },
  {
    name: "Loco",
  },
  {
    name: "Leco",
  },
  {
    name: "X",
  },
];


from(personajes).pipe(distinct(val => val.name)).subscribe(console.log)


//Distinct: Solo deja pasar valores que no hayan sido previamente emitidos por el observer
