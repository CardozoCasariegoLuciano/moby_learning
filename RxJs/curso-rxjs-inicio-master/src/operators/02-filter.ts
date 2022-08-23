import { from, of, range } from "rxjs";
import { filter } from "rxjs/operators";

//range(1, 10)
//.pipe(filter((val) => val % 2 === 1))
//.subscribe(console.log);

type DC = {
  typo :string,
  nombre: string,
}

const personajes: DC[] = [
  {
    typo: "Heroe",
    nombre: "Batman",
  },

  {
    typo: "Heroe",
    nombre: "Robin",
  },

  {
    typo: "villano",
    nombre: "Lex Lutor",
  },
];


const soloHeroes = from(personajes).pipe(
  filter((char) => {
    return char.typo === "Heroe";
  })
)


soloHeroes.subscribe(console.log)
