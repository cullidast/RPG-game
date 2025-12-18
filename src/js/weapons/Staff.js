import { Weapon } from './Weapon.js';

export class Staff extends Weapon {
    constructor() {
        // Название, урон, прочность, дальность
        super('Посох', 8, 80, 2);
    }
}