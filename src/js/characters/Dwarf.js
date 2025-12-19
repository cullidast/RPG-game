import { Warrior } from './Warrior.js';
import { Axe } from '../weapons/Axe.js'; // Используем Секиру (улучшенное оружие)

export class Dwarf extends Warrior {
    constructor(position, name) {
        super(position, name); // Наследуем от Warrior

        // Переопределяем свойства согласно Таблице 4
        this.life = 130;
        // magic остается как у Warrior (20)
        // speed остается как у Warrior (2)
        this.attack = 15;
        // agility остается как у Warrior (5)
        this.luck = 20;
        this.description = 'Гном';

        // Основное оружие: Секира
        this.weapon = new Axe();
        
    
    }
    takeDamage(damage) {
        this.hitsTakenCount++;

        // Проверяем, шестой ли это удар, и сработала ли удача
        if (this.hitsTakenCount % 6 === 0 && this.getLuck() > 0.5) {
            console.log(`${this.name} счастливо увернулся! Урон снижен вдвое.`);
            damage /= 2; // Урон в 2 раза меньше
        }

        // Применяем урон через базовый метод
        super.takeDamage(damage);
    }
}

