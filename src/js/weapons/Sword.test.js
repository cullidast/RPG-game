import { Sword } from './Sword.js';

describe('Класс Sword (Меч)', () => {
    let sword;

    beforeEach(() => {
        sword = new Sword();
    });

    test('должен иметь правильные начальные свойства', () => {
        expect(sword.name).toBe('Меч');
        expect(sword.attack).toBe(25);
        expect(sword.durability).toBe(500);
        expect(sword.range).toBe(1);
    });
});