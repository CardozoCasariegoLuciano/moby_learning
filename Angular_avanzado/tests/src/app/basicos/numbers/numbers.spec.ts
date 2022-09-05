import {incrementar} from "./numbers";


describe("Tests sobre numeros", () => {

  it("si el numero es mayor a 100, tiene que retornar 100", () => {
    const resp = incrementar(300)
    expect(resp).toBe(100);
  })

  it('Tiene que incrementar su valor en uno', () => {

    const initialValue = 20
    const resp = incrementar(initialValue)

    expect(resp).toBe(initialValue + 1);
  });
})
