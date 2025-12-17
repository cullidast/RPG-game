import { Player } from './Player.js'; 
import { Staff } from '../weapons/Staff.js';

export class Mage extends Player { // <-- Должен экспортироваться Mage
    constructor() {
        super();
        // console.log('Создан новый объект Mage.'); 
        this.currentWeapon = new Staff();
    }
}