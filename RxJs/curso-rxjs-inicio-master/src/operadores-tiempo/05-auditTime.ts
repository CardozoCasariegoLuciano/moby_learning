import { auditTime, interval } from "rxjs";

const interval$ = interval(200);
interval$.pipe(auditTime(2000)).subscribe(console.log);

