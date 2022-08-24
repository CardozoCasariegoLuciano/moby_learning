import { distinctUntilKeyChanged, from } from "rxjs";

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
    distinctUntilKeyChanged("name")
  )
  .subscribe(console.log);
