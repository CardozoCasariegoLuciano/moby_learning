import { auditTime, interval } from "rxjs";

const interval$ = interval(200);
interval$.pipe(auditTime(2000)).subscribe(console.log);


//auditTime(TIME): luego de emitir un valor comienza un contador, cuando llega al TIME,
// muestra el ultimo valor emivito en ese timepo

