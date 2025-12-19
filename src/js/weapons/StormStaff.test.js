import { StormStaff } from './StormStaff.js';

describe('Класс StormStaff (Штормовой посох)', () => {
    let stormStaff;

    beforeEach(() => {
        stormStaff = new StormStaff();
    });

    test('должен иметь правильные начальные свойства (унаследованные и измененные)', () => {
        expect(stormStaff.name).toBe('посох бури'); // Изменено
        expect(stormStaff.attack).toBe(10);               // Изменено
        expect(stormStaff.durability).toBe(300);          // Унаследовано от Staff
        expect(stormStaff.range).toBe(3);                // Унаследовано от Staff
    });
});