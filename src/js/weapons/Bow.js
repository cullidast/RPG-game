import { Weapon } from './Weapon.js';

export class Bow extends Weapon {
    constructor() {
        // Название, урон, прочность, дальность
        super('Лук', 10, 100, 3);
    }
}