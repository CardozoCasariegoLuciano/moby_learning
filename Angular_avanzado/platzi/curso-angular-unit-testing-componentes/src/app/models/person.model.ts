export class Person {
  constructor(
    public name: string,
    public lastname: string,
    public age: number,
    public weigth: number,
    public heigth: number
  ) {}

  calcIMC(): string {
    const result = Math.round(this.weigth / this.heigth ** 2);

    if (result < 0) {
      return 'not found';
    } else if (result >= 0 && result < 18) {
      return 'Down';
    } else if (result >= 19 && result < 24) {
      return 'Normal';
    } else if (result >= 25 && result < 26) {
      return 'overweigth';
    } else if (result >= 27 && result < 29) {
      return 'overweigth level 1';
    } else if (result >= 30 && result < 39) {
      return 'overweigth level 2';
    } else if (result >= 40) {
      return 'overweigth level 3';
    } else {
      return 'Not found';
    }
  }
}
