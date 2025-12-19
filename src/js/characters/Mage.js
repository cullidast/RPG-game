import { Player } from './Player.js';
import { Staff } from '../weapons/Staff.js';

export class Mage extends Player {
    constructor(position, name) {
        super(position, name); // Наследуем базовые stats

        // Переопределяем свойства согласно Таблице 3
        this.life = 70;
        this.magic = 100;
        // speed остается 1
        this.attack = 5;
        this.agility = 8;
        // luck остается 10
        this.description = 'Маг';

        // Основное оружие: Посох
        this.weapon = new Staff();
    }
        
         // Переопределение метода takeDamage специально для Mage
    takeDamage(damage) {
        const halfMagicThreshold = this.initMagic / 2;

        if (this.magic > halfMagicThreshold) {
            // Урон в 2 раза меньше базового
            const reducedDamage = damage / 2; 
            // Уменьшаем ману на 12
            this.magic -= 12;
            if (this.magic < 0) this.magic = 0;

            // Применяем уменьшенный урон к жизни через базовый метод
            super.takeDamage(reducedDamage);
        } else {
            // Если маны меньше 50%, получаем полный урон
            super.takeDamage(damage);
        }
    }
}