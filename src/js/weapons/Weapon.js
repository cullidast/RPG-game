export class Weapon {
    constructor(name, attack, durability, range) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.initialDurability = durability; // Сохраняем начальную прочность для расчета урона
        this.range = range;
    }

    takeDamage(amount) {
        this.durability -= amount;
        if (this.durability < 0) {
            this.durability = 0;
        }
    }

    getDamage() {
        if (this.isBroken()) {
            return 0;
        }
        if (this.durability >= (this.initialDurability * 0.3)) { // 30% и выше прочности
            return this.attack;
        }
        // Если прочность ниже 30%, урон уменьшается вдвое
        return this.attack / 2;
    }

    isBroken() {
        return this.durability <= 0;
    }
}