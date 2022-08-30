import { Observable } from "rxjs";

const obs = new Observable<string>((subs) => {
  subs.next("Hola");
  subs.next("Mundo");

  subs.next("Como");
  subs.next("Estan");

  subs.complete();

  subs.next("Hola");
  subs.next("Hola");
});

obs.subscribe(
  (valor) => console.log("valor: ", valor),
  (err) => console.warn("Error: ", err),
  () => console.log("Terminado")
);
