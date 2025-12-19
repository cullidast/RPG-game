export class Weapon {
    constructor(name, attack, durability, range) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.initialDurability = durability; // Сохраняем начальную прочность для расчета урона
        this.range = range;
    }

    takeDamage(damage) {
        this.durability -= damage;
        if (this.durability < 0) {
            this.durability = 0;
        }
    }

   getDamage() {
        if (this.durability <= 0) {
            // При прочности 0 или меньше, урон равен 0
            return 0;
        }

        // Вычисляем значение 30% от изначальной прочности
        const durabilityThreshold = this.initialDurability * 0.3; // Используем initDurability

        if (this.durability >= durabilityThreshold) { 
            // Если прочность 30% или выше, выдаем полную атаку
            return this.attack;
        }
        
        // В противном случае (если прочность ниже 30%), урон уменьшается вдвое
        return this.attack / 2;
    }

    isBroken() {
        return this.durability <= 0;
    }
}