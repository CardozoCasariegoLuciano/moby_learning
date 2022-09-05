import { mensaje } from './strings';

describe('Tests sobre strings', () => {
  it('Tiene que retornar un string', () => {
    const value = mensaje('Luciano');
    expect(value).toBeInstanceOf(String);
  });

  it('Tiene que contener el nombre que paso por parametro', () => {
    const nombre = "Luciano"

    const value = mensaje(nombre);
    expect(value).toContain(nombre)
  });
});
