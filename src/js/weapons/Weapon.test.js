import { Weapon } from './Weapon.js';

describe('Weapon Class', () => {
    let weapon;

    beforeEach(() => {
        // name, attack, durability, range
        // Устанавливаем изначальную прочность 100 для тестов
        weapon = new Weapon('Тестовый меч', 20, 100, 1); 
    });

    test('should initialize with correct properties', () => {
        expect(weapon.name).toBe('Тестовый меч');
        expect(weapon.attack).toBe(20);
        expect(weapon.durability).toBe(100); // 
        expect(weapon.range).toBe(1);
    });

    test('isBroken should return false when durability > 0', () => {
        expect(weapon.isBroken()).toBe(false);
    });

    test('isBroken should return true when durability <= 0', () => {
        weapon.takeDamage(100);
        expect(weapon.isBroken()).toBe(true);
    });

    test('takeDamage should reduce durability', () => {
        weapon.takeDamage(10);
        expect(weapon.durability).toBe(90);
    });

    test('takeDamage should not reduce durability below 0', () => {
        weapon.takeDamage(150);
        expect(weapon.durability).toBe(0);
    });

    test('getDamage should return full attack power when durability is high', () => {
        // При прочности 100 и атаке 20, 30% порог = 30.
        expect(weapon.getDamage()).toBe(20); // <-- Ожидаем 20 урона
    });

    test('getDamage should return half attack power when durability is low (< 30%)', () => {
        weapon.takeDamage(71); // Durability becomes 29 (ниже 30%)
        expect(weapon.durability).toBe(29);
        expect(weapon.getDamage()).toBe(10); // Половина урона (20 / 2)
    });

    test('getDamage should return 0 when broken', () => {
        weapon.takeDamage(100);
        expect(weapon.getDamage()).toBe(0);
    });
});