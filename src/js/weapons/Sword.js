import { Weapon } from './Weapon.js';

export class Sword extends Weapon {
    constructor() {
        // Название, урон, прочность, дальность
        super('Меч', 25, 500, 1);
    }
}