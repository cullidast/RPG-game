import { LongBow } from './LongBow.js';

describe('Класс LongBow (Длинный лук)', () => {
    let longBow;

    beforeEach(() => {
        longBow = new LongBow();
    });

    test('должен иметь правильные начальные свойства (унаследованные и измененные)', () => {
        expect(longBow.name).toBe('Длинный лук'); // Изменено
        expect(longBow.attack).toBe(10);          // Унаследовано от Bow
        expect(longBow.durability).toBe(100);     // Унаследовано от Bow
        expect(longBow.range).toBe(4);            // Изменено
    });
});