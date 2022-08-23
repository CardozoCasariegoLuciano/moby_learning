import { interval, reduce, take } from "rxjs";

const totalReducer = (acumulador: number, valorActual: number) => {
  return acumulador + valorActual;
};

interval(1000)
  .pipe(take(4), reduce(totalReducer))
  .subscribe({
    next: (val) => {
      console.log("next: ", val);
    },
    complete: () => {
      console.log("complete");
    },
  });
