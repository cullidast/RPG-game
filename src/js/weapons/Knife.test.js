import { Knife } from './Knife.js';

describe('Класс Knife (Нож)', () => {
    let knife;

    beforeEach(() => {
        knife = new Knife();
    });

    test('должен иметь правильные начальные свойства', () => {
        expect(knife.name).toBe('Нож');
        expect(knife.attack).toBe(5);
        expect(knife.durability).toBe(300);
        expect(knife.range).toBe(1);
    });
});