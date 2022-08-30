import {Observable, Observer, Subject} from "rxjs";

const observer: Observer<any> = {
    next: valor => console.log("valor: ", valor),
    error: err => console.warn("Error: ", err),
    complete: () => console.log("Terminado")
}


const intervalo = new Observable<number>(subs => {
    const intervalID = setInterval( () => {
        subs.next(Math.random())
    }, 1000)

    return () => {
        clearInterval(intervalID)
        console.log("Terminado el interval")
    }
})

//Numeros random distintos para cada subscripcion
//const subs1 = intervalo.subscribe(rnd => console.log("1: ", rnd))
//const subs2 = intervalo.subscribe(rnd => console.log("2: ", rnd))

//Mismo Numero para las dos subscriopciones
const subject = new Subject()
const intervalSubject = intervalo.subscribe(subject)

const subs1 = subject.subscribe(observer)
const subs2 = subject.subscribe(observer)


setTimeout(() => {
    subject.next(10)
    subject.complete()
    intervalSubject.unsubscribe()
}, 3500);


//El Subject esta bueno para que varios observers reciban  el mismo valor emitido
