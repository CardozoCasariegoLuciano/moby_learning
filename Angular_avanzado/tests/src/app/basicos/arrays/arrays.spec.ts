import { robots } from './arrays';

describe('Tests de arrays', () => {

  it('Tiene que retornar un array', () => {
    const resp = robots();
    expect(resp).toBeInstanceOf(Array);
  });

  it('Tiene que retornar al menos 4 robots', () => {
    const resp = robots();
    expect(resp.length).toBeGreaterThanOrEqual(4)
  });

  it('Tienen que existir tanto R2D2 como C3PO', () => {
    const resp = robots();
    expect(resp).toContain("R2D2")
    expect(resp).toContain("C3PO")
  });

});
