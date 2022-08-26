import { catchError, of, pluck } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";

const url = "https://api.github.com/users?per_page=5";

//Con el metodo fetch que ya traen los navegadores
//const fetchPromesa = fetch(url);

//const manejarErrores = (response: Response) => {
//if (!response.ok) {
//throw new Error(response.statusText);
//}

//return response;
//};

//fetchPromesa
//.then(manejarErrores)
//.then((resp) => resp.json())
//.then((data) => console.log("data: ", data))
//.catch((err) => console.warn("Error: ", err));

//Con Observables

const atrapaError = (err: AjaxError) => {
  console.log("Error: ", err);
  return of([]);
};

ajax(url)
  .pipe(pluck("response"), catchError(atrapaError))
  .subscribe(console.log);

//ajax ya se encarga de traer toda la data y retornar un observable
//ajax por defecto hace un get, pero tambien se le  puede especificar con ajax.get / ajax.post / .delete etc
//catchError se encarga de manejar los errores, tienen que retornar algo para que pueda usar el prox pipe/subcriber
