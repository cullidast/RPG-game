import { Axe } from './Axe.js';

describe('Класс Axe (Топор)', () => {
    let axe;

    beforeEach(() => {
        axe = new Axe();
    });

    test('должен иметь правильные начальные свойства, унаследованные от Sword, но измененные', () => {
        expect(axe.name).toBe('Секира'); // Имя изменено
        expect(axe.attack).toBe(27);    // Урон изменен (был 15 у меча)
        expect(axe.durability).toBe(800); // Прочность унаследована от меча
        expect(axe.range).toBe(1);      // Дальность унаследована от меча
    });
});