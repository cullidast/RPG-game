import { Mage } from './Mage.js';
import { StormStaff } from '../weapons/StormStaff.js'; // Используем Посох Бури

export class Demiurge extends Mage {
    constructor(position, name) {
        super(position, name); // Наследуем от Mage

        // Переопределяем свойства согласно Таблице 4
        this.life = 80;
        this.magic = 120;
        // speed остается как у Mage (1)
        this.attack = 6;
        // agility остается как у Mage (8)
        this.luck = 12;
        this.description = 'Демиург';

        // Основное оружие: Посох Бури
        this.weapon = new StormStaff();
        
       
    }

        // Переопределение метода getDamage специально для Demiurge
    getDamage(distance) {
        // Сначала получаем базовый расчет урона от родительского класса Mage/Player
        let totalDamage = super.getDamage(distance);

        // Применяем уникальный бонус Демиурга
        if (totalDamage > 0 && this.magic > 0 && this.getLuck() > 0.6) {
            console.log(`${this.name} усиливает удар магией!`);
            totalDamage *= 1.5;
        }

        return totalDamage;
    }
}