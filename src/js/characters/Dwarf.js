import { Warrior } from './Warrior.js';
import { Axe } from '../weapons/Axe.js'; 

export class Dwarf extends Warrior {
    constructor() {
        super();
        console.log('Создан новый объект Dwarf.');
        this.currentWeapon = new Axe();
    }
}