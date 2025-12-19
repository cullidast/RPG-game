import { Archer } from './Archer.js';
import { LongBow } from '../weapons/LongBow.js'; // Используем Длинный лук

export class Crossbowman extends Archer {
    constructor(position, name) {
        super(position, name); // Наследуем от Archer

        // Переопределяем свойства согласно Таблице 4
        this.life = 85;
        // magic остается как у Archer (35)
        // speed остается как у Archer (1)
        this.attack = 8;
        this.agility = 20;
        this.luck = 15;
        this.description = 'Арбалетчик';

        // Основное оружие: Длинный лук
        this.weapon = new LongBow();

    }
}