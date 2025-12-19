import { Bow } from './Bow.js';

export class LongBow extends Bow {
    constructor() {
        super();// Наследует всё от Bow: attack(10), durability(200), range(3)

        this.name = 'Длинный лук';
        this.attack = 15;
        this.range = 4;
    }
}