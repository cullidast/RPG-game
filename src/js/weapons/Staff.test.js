import { Staff } from './Staff.js';

describe('Класс Staff (Посох)', () => {
    let staff;

    beforeEach(() => {
        staff = new Staff();
    });

    test('должен иметь правильные начальные свойства', () => {
        expect(staff.name).toBe('Посох');
        expect(staff.attack).toBe(8);
        expect(staff.durability).toBe(300);
        expect(staff.range).toBe(2);
    });
});