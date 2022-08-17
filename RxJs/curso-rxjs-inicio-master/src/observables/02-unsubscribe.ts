import {Observable, Observer} from "rxjs";

const observer: Observer<any> = {
    next: valor => console.log("valor: ", valor),
    error: err => console.warn("Error: ", err),
    complete: () => console.log("Terminado")
}


const intervalo = new Observable<number>(subs => {
    let number = 0
    const interval = setInterval( () => {
        subs.next(number)
        number++
    }, 1000)

    setTimeout(() => {
        subs.complete()
    }, 3000);

    return () => {
        clearInterval(interval)
        console.log("Terminado el interval")
    }
})

const subs = intervalo.subscribe(observer)

setTimeout(() => {
    subs.unsubscribe()
    console.log("Pasa por aca")
}, 4000)
