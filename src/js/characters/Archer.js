import { Player } from './Player.js';
import { Bow } from '../weapons/Bow.js';


export class Archer extends Player {
    constructor(position, name) {
        super(position, name); // Наследуем базовые stats

        // свойства согласно Таблице 3
        this.life = 80;
        this.magic = 35;
        // speed остается 1
        this.attack = 5;
        this.agility = 10;
        // luck остается 10
        this.description = 'Лучник';

        // Основное оружие: Лук
        this.weapon = new Bow();

    }

    //преопределение метода getDamage
    getDamage(distance) {
        const weaponDamage = this.weapon.getDamage();
        const luckCofficient = this.getLuck();
        const weaponRange = this.weapon.range;

        //проверка дальности
        if (distance > weaponDamage) {
            return 0;
        }

        //( attack + weaponDamage ) * getLuck() * distance / weaponRange
        const totalDamage = (this.attack + weaponDamage) * luckCofficient * distance / weaponRange;

        return totalDamage;
    }

}