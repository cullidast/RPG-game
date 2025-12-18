import { Arm } from './Arm.js';

describe('Класс Arm (Рука)', () => {
    let arm;

    beforeEach(() => {
        arm = new Arm();
    });

    test('должен иметь правильные начальные свойства', () => {
        expect(arm.name).toBe('Рука');
        expect(arm.attack).toBe(1);
        expect(arm.durability).toBe(Infinity); // Проверяем бесконечную прочность
        expect(arm.range).toBe(1);
    });

    test('не должна ломаться из-за бесконечной прочности', () => {
        arm.takeDamage(1000000);
        expect(arm.isBroken()).toBe(false);
        expect(arm.durability).toBe(Infinity);
    });
});