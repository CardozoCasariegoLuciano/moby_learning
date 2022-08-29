import {
  asyncScheduler,
  distinctUntilChanged,
  fromEvent,
  pluck,
  throttleTime,
} from "rxjs";

//const clicks = fromEvent<MouseEvent>(document, "click");
//clicks.pipe(throttleTime(1000)).subscribe(console.log);

const input = document.createElement("input");
document.querySelector("body").append(input);

const input$ = fromEvent<KeyboardEvent>(input, "keyup");

input$
  .pipe(
    throttleTime(1000, asyncScheduler, {
      leading: true,
      trailing: true,
    }),
    pluck("target", "value"),
    distinctUntilChanged()
  )
  .subscribe(console.log);
