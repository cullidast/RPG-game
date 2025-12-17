import { Mage } from './Mage.js'; 
import { StormStaff } from '../weapons/StormStaff.js'; 

export class Demiurge extends Mage { // <-- Должен экспортироваться Demiurge
    constructor() {
        super();
        console.log('Создан новый объект Demiurge.');
        this.currentWeapon = new StormStaff();
    }
}