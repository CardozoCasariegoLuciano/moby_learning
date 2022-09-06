import { EventEmitter } from '@angular/core';

export class Jugador2 {
  hp: number;
  changeHP = new EventEmitter<number>();

  constructor() {
    this.hp = 100;
  }

  getDamage(damage: number) {
    if (damage > this.hp) {
      this.hp = 0;
    } else {
      this.hp = this.hp - damage;
    }

    this.changeHP.emit(this.hp);
  }
}
