import { logToHtml } from '../utils.js'
export class Player {
    // в конструктор передаем name и position — имя персонажа, позицию, расстояние для расчета урона
    constructor(position, name) {
        this.name = name;

        // инициализация характеристик 
        this.life = 100;
        this.magic = 20;
        this.speed = 1;
        this.attack = 10;
        this.agility = 5;
        this.luck = 10;
        this.description = 'игрок';
        this.position = position;
        
        // оружие по умолчанию — рука 
        this.weapon = {
            name: 'рука',
            attack: 1,
            durability: Infinity,
            initDurability: Infinity,
            range: 1,
            getDamage: () => 1,
            takeDamage: function() {},
            isBroken: () => false
        };
    }

    // метод возвращает коэффициент удачливости
    getLuck() {
        const randomNumber = Math.random() * 101;
        return (randomNumber + this.luck) / 100;
    }

    // метод расчета силы удара
    getDamage(distance) {
        // проверка дальности если превышает range оружия — возвращаем 0
        if (distance > this.weapon.range) {
            return 0;
        }

        // получаем текущий урон от оружия с учётом прочности
        const weaponDamage = this.weapon.getDamage();

        // получаем коэффициент удачи 
        const luckCoefficient = this.getLuck();

        // расчёт силы удара (attack + weaponDamage) * getLuck() / distance
        const totalDamage = (this.attack + weaponDamage) * luckCoefficient / Math.max(1, distance);

        return totalDamage;
    }

    // метод получения урона
    takeDamage(damage) {
        this.life -= damage;
        // здоровье не опускается ниже 0
        if (this.life < 0) {
            this.life = 0;
        }
    }

    // проверка смерти персонажа
    isDead() {
        return this.life === 0;
    }
    
    // методы перемещения
    moveLeft(distance) {
        const moveAmount = Math.min(distance, this.speed);
        this.position -= moveAmount;
        logToHtml(`${this.name} сместился влево на ${moveAmount} делений. Позиция: ${this.position}`);
    }

    moveRight(distance) {
        const moveAmount = Math.min(distance, this.speed);
        this.position += moveAmount;
        console.log(`${this.name} сместился вправо на ${moveAmount} делений. Позиция: ${this.position}`);
    }

    move(distance) {
        if (distance < 0) this.moveLeft(Math.abs(distance));
        else this.moveRight(distance);
    }

    // Методы защиты 
    isAttackBlocked() {
        const luckThreshold = (100 - this.luck) / 100;
        return this.getLuck() > luckThreshold;
    }

    dodged() {
        const dodgeThreshold = (100 - this.agility - this.speed * 3) / 100;
        return this.getLuck() > dodgeThreshold;
    }
}
