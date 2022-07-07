/*
    ===== Código de TypeScript =====
*/

import {Iauto} from "./interfaces/interfaces";

const lista: Iauto[] = [
    {
        marca: "",
        ruedas: 2,
        color: "rojo",
    }
] 

function queTipoSoy<T>(arg: T) {
   return arg 
}


let soyString = queTipoSoy("Holaaa")
let soyNumero = queTipoSoy(123)
