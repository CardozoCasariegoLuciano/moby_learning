import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[errMsg]',
})
export class ErrMsgDirective implements OnInit {
  private _color: string = 'red';
  private _texto: string = 'Luciano Cardozo Casariego';

  elemen: ElementRef<HTMLElement>;
  @Input() set color(valor: string) {
    this._color = valor;
    this.setColor();
  }
  @Input() set mensaje(texto: string) {
    this._texto = texto;
    this.setMensaje();
  }

  constructor(private el: ElementRef<HTMLElement>) {
    this.elemen = this.el;
  }

  ngOnInit(): void {
    this.setColor();
    this.setMensaje();
  }

  setColor(): void {
    this.elemen.nativeElement.style.color = this._color;
  }

  setMensaje(): void {
    this.elemen.nativeElement.innerText = this._texto;
  }
}
