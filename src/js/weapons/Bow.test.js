import { Bow } from './Bow.js';

describe('Класс Bow (Лук)', () => {
    let bow;

    beforeEach(() => {
        bow = new Bow();
    });

    test('должен иметь правильные начальные свойства', () => {
        expect(bow.name).toBe('Лук');
        expect(bow.attack).toBe(10);
        expect(bow.durability).toBe(100);
        expect(bow.range).toBe(3);
    });
});