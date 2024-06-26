import { Jugador2 } from './jugador2';

describe('Tests de Jugador 2 Emmit', () => {
  let jugador = new Jugador2();

  beforeEach(() => {
    jugador = new Jugador2();
  });

  it('Debe emitir un evento cuando recibe daño', () => {
    let nuevoHP = 0;
    jugador.changeHP.subscribe((hp) => {
      nuevoHP = hp;
    });

    jugador.getDamage(1000);

    expect(nuevoHP).toBe(0);
  });

  it('Debe emitir un evento cuando recibe daño y sobrevivir si es menos de 100', () => {
    let nuevoHP = 0;
    jugador.changeHP.subscribe((hp) => {
      nuevoHP = hp;
    });

    jugador.getDamage(75);

    expect(nuevoHP).toBe(25);
  });
});
