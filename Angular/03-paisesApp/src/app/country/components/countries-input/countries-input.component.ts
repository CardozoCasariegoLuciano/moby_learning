import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-countries-input',
  templateUrl: './countries-input.component.html',
  styles: [],
})
export class CountriesInputComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string = '';

  debounser: Subject<string> = new Subject();
  termino: string = '';

  ngOnInit(): void {
    this.debounser.pipe(debounceTime(400)).subscribe((valor) => {
      this.onDebounce.emit(this.termino);
    });
  }

  buscar() {
    this.onEnter.emit(this.termino);
  }

  keyPress() {
    this.debounser.next(this.termino);
  }
}
