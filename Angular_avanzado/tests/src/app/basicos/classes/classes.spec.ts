import { Jugador } from './classes';

describe('test de clases', () => {
  let jugador = new Jugador();

  beforeEach(() => {
    jugador = new Jugador();
  });

  it('un nuevojugador tiene 100 de hp', () => {
    expect(jugador.hp).toBe(100);
  });

  it('al ser atacado el jugador pierde vida', () => {
    jugador.getDamage(50);
    expect(jugador.hp).toBe(50);
  });

  it('El jugador no puede perder mas vida de la que tiene', () => {
    jugador.getDamage(250);
    expect(jugador.hp).toBe(0);
  });
});
