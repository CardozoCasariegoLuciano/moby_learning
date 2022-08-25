import { debounceTime, distinctUntilChanged, fromEvent, pluck } from "rxjs";

//const clicks = fromEvent<MouseEvent>(document, "click");
//clicks.pipe(debounceTime(1000)).subscribe(console.log);

const input = document.createElement("input");
document.querySelector("body").append(input);

const input$ = fromEvent<KeyboardEvent>(input, "keyup");

input$
  .pipe(
      debounceTime(1000),
      pluck("target", "value"),
      distinctUntilChanged()
  )
  .subscribe(console.log);

