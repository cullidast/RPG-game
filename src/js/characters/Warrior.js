import { Player } from './Player.js'; // <-- Убедитесь, что Player импортируется правильно
import { Sword } from '../weapons/Sword.js';

export class Warrior extends Player { // <-- Player не должен быть undefined здесь
    constructor() {
        super();
        this.currentWeapon = new Sword();
    }
}