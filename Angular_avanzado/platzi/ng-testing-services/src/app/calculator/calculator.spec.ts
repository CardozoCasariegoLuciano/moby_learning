import { Calculator } from './calculator';

describe('Una calculadora puede multiplicar', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it('Debe poder multiplicar correctamente', () => {
    const value = calculator.multiply(3, 6);

    expect(value).toBe(18);
  });

  it('Si intentamos dividir por 0 retorna un null', () => {
    const value = calculator.divide(10, 0);

    expect(value).toBeNull();
  });

  it('Debe dividir correctamente', () => {
    const value = calculator.divide(0, 10);
    expect(value).toBe(0);
  });

  it('Debe dividir correctamente', () => {
    const value = calculator.divide(10, 2);
    expect(value).toBe(5);
  });
});
