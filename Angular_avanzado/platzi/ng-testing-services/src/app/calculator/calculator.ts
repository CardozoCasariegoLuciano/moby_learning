export class Calculator {
  multiply(valueA: number, valueB: number) {
    return valueA * valueB;
  }

  divide(divisor: number, divider: number) {
    if (divider === 0) {
      return null
    }
    return divisor / divider
  }
}
