import { range, tap } from "rxjs";

const numbers$ = range(1, 5);
numbers$
  .pipe(tap((val) => console.log("tap:", val)))
  .subscribe((val) => console.log("sub: ", val));
