import { of } from "rxjs";

const obs = of(1, 2, 3, 4, 5, 6);

obs.subscribe(
  (value) => console.log("next: ", value),
  null,
  () => console.log("terminamoss")
);

//retorna el valor que le paso por parametro en forma de observable
