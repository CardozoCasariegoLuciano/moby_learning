import { Person } from './person.model';

describe('Test de persona', () => {
  let persona: Person;

  beforeEach(() => {
    persona = new Person('Luciano', 'Cardozo', 24, 65, 1.75);
  });

  it('attrs', async () => {
    expect(persona.age).toBe(24);
  });

  describe('Test de la masa corporal', () => {
    it('should return a "down" string', () => {
      expect(persona.calcIMC()).toBe("Normal")
    });
  });
});
