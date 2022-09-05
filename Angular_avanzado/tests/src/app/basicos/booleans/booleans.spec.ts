import {usuarioLogueado} from "./booleans";


describe("Tests de Booleanos", () => {

  it('Tiene que retornar true', () => {

    const resp = usuarioLogueado()
    expect(resp).toBeTrue()
  });
})
