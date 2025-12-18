import { Weapon } from './Weapon.js';

export class Sword extends Weapon {
    constructor() {
        // Название, урон, прочность, дальность
        super('Меч', 15, 150, 1);
    }
}