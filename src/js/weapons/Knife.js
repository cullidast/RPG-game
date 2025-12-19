import { Weapon } from './Weapon.js';

export class Knife extends Weapon {
    constructor() {
        // Название, урон, прочность, дальность
        super('Нож', 5, 300, 1);
    }
}