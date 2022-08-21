//setTimeout(() => {}, 3000);
//setInterval(() => {}, 3000);

import { asyncScheduler } from "rxjs";

const saludar = () => {
  console.log("HOla mundo");
};
const saludar2 = (nombre) => {
  console.log(`Hola ${nombre}`);
};

//Es como un SetTimeOut
//asyncScheduler.schedule(saludar, 2000)

//Si quiero pasar un parametro uso el 3er argumanto (solo puedo pasar un valor, si quiero mas mejor usa un objeto)
//asyncScheduler.schedule(saludar2, 2000, "luciano")


//Es como un SetInterval
const subs = asyncScheduler.schedule(
  function (value) {
    console.log(value);
    this.schedule(value + 1, 1000);
  },
  3000, //cada cuanto lo quiero ejectuar
  0  //Valor inicial
);


// dan como resultados una subscripcion normal
asyncScheduler.schedule(() => subs.unsubscribe(), 6000)
//tambien lo puedo hacer con setTimeOut
