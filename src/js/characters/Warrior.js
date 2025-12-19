import { Player } from './Player.js';
import { Sword } from '../weapons/Sword.js';

export class Warrior extends Player {
    constructor(position, name) {
        super(position, name); // Наследуем базовые stats: life(100), magic(20), speed(1), attack(10), agility(5), luck(10)

        // свойства согласно Таблице 3
        this.life = 120;
        // magic остается 20
        this.speed = 2;
        // attack остается 10
        // agility остается 5
        // luck остается 10
        this.description = 'Воин';

        // Основное оружие: Меч
        this.weapon = new Sword();
    }

    // переопределяем метод получения урона 
    takeDamage(damage) {
        const halfLifeThreshold = this.initLife / 2; // 50% от 120 = 60


        // Пров усл здоровье ниже 50% И getLuck() > 0.8
        if (this.life < halfLifeThreshold && this.getLuck() > 0.8) {
            if (this.magic > 0) {
                const manaDamage = Math.min(this.magic, damage);
                this.magic -= manaDamage;

                //уменьшаем урон  на количество поглащеной маной
                damage -= manaDamage;

                if (manaDamage > 0) {
                    console.log(`${this.name} получает урон ${manaDamage} из магии.`);
                }
            }
        }

        super.takeDamage(damage); 
    }
}