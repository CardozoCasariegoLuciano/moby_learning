import { distinct, distinctUntilChanged, from, of } from "rxjs";

const numeros = of(1, 1, 1, 2, 2, 3, 4, 5, 5, 1);

numeros.pipe(distinctUntilChanged()).subscribe({
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

from(personajes)
  .pipe(
    distinctUntilChanged((anterior, actual) => anterior.name === actual.name)
  )
  .subscribe(console.log);


  //DistinctUntilChanged: Similar al distinct, pero este no se fita en toodas las emisiones 
  // anteriores, solo en la anterior inmediata
