import { interval, sampleTime } from "rxjs";

const interval$ = interval(200)
interval$.pipe(sampleTime(2000)).subscribe(console.log);


//SampleTime(MILISECONDS): Emite el ultimo valor emitido en intervalos de MILISECONDS
