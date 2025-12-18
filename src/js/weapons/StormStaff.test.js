import { StormStaff } from './StormStaff.js';

describe('Класс StormStaff (Штормовой посох)', () => {
    let stormStaff;

    beforeEach(() => {
        stormStaff = new StormStaff();
    });

    test('должен иметь правильные начальные свойства (унаследованные и измененные)', () => {
        expect(stormStaff.name).toBe('Штормовой посох'); // Изменено
        expect(stormStaff.attack).toBe(12);               // Изменено
        expect(stormStaff.durability).toBe(80);          // Унаследовано от Staff
        expect(stormStaff.range).toBe(2);                // Унаследовано от Staff
    });
});